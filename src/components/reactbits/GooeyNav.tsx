import { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'uz', name: 'O\'zbekcha', flag: '🇺🇿' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

export default function GooeyNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [showLanguages, setShowLanguages] = useState(false);
  const { theme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const languageRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const navItems = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.education'), href: '#education' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 64);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > 64) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down - hide navbar
          setIsVisible(false);
        } else {
          // Scrolling up - show navbar
          setIsVisible(true);
        }
      } else {
        // Always show navbar at top
        // setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;

      // Track active section
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setShowLanguages(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLanguageChange = (code: string) => {
    setLanguage(code as any);
    setShowLanguages(false);
  };

  return (
    isVisible && (
      <motion.nav
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible ? 0 : '-100%',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${
        isScrolled
          // ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-lg'
          // : 'bg-transparent'
      }
          `
    }
    >
      {
        isVisible && (
          <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-3 relative">
            <div className="flex items-center gap-1 bg-card/60 backdrop-blur-md rounded-full px-2 py-1.5 border border-border/50 shadow-lg"
             style={{ background: theme === 'dark' ? 'rgba(51, 51, 51, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === item.href
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <>
                      <motion.span
                        layoutId="gooeyBubble"
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 35,
                        }}
                        style={{
                          filter: 'blur(10px)',
                        }}
                      />
                      <motion.span
                        layoutId="gooeyBubbleInner"
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 35,
                        }}
                      />
                    </>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="relative" ref={languageRef}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowLanguages(!showLanguages)}
                  className="rounded-full bg-card/60 backdrop-blur-md border border-border/50 hover:bg-accent/80 shadow-md"
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </motion.div>

              <AnimatePresence>
                {showLanguages && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden min-w-[120px]"
                  >
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-colors hover:bg-accent flex items-center gap-2 ${
                          language === lang.code ? 'bg-accent text-foreground' : 'text-muted-foreground'
                        }`}
                      >
                        {/* <span className="text-base">{lang.flag}</span> */}
                        <span>{lang.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full bg-card/60 backdrop-blur-md border border-border/50 hover:bg-accent/80 shadow-md"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            </motion.div> */}
          </div>
        </div>
      </div>
        )
      }
    </motion.nav>
    )
  );
}
