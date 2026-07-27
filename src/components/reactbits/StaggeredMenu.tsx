import { useState, useEffect, useRef } from 'react';
import { 
  // Moon, Sun, 
  Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
// import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'uz', name: 'O\'zbekcha', flag: '🇺🇿' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

export default function  StaggeredMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
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
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (code: string) => {
    setLanguage(code as any);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
         
        }`}
      >
        <div className="px-4 md:px-6">
          <div className="flex items-center justify-between h-16 gap-2">
            <motion.a
              href="#"
              className="text-sm sm:text-base font-semibold tracking-tight whitespace-nowrap shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
            </motion.a>

            <div className="flex items-center gap-2 shrink-0">
              {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="rounded-full hover:bg-accent"
                >
                  {theme === 'light' ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                </Button>
              </motion.div> */}

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-accent"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 250,
                mass: 0.8
              }}
              className="fixed right-0 top-0 h-full w-[min(85vw,320px)] bg-card/98 backdrop-blur-2xl border-l border-border z-50 md:hidden shadow-2xl overflow-hidden"
              style={{ 
                WebkitOverflowScrolling: 'touch',
                touchAction: 'pan-y',
                willChange: 'transform'
              }}
            >
              <div className="flex flex-col h-full p-6 sm:p-8">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="font-semibold text-lg">{t('nav.menu')}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex-1 overflow-y-auto scrollbar-hide">
                  <div className="space-y-2 mb-10">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.05,
                          type: 'spring',
                          stiffness: 350,
                          damping: 28,
                        }}
                        onClick={() => scrollToSection(item.href)}
                        className="w-full text-left px-5 py-3.5 rounded-xl text-base font-medium text-foreground hover:bg-accent/80 transition-all duration-200 hover:pl-6"
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </div>

                  {/* Language Selector */}
                  <div className="border-t border-border pt-8">
                    <div className="flex items-center gap-2 mb-4 px-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        {t('nav.language') || 'Language'}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {languages.map((lang, index) => (
                        <motion.button
                          key={lang.code}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: (navItems.length + index) * 0.05,
                            type: 'spring',
                            stiffness: 350,
                            damping: 28,
                          }}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full text-left px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                            language === lang.code
                              ? 'bg-accent text-foreground shadow-sm'
                              : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                          }`}
                        >
                          {/* <span className="text-base">{lang.flag}</span> */}
                          <span>{lang.name}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
