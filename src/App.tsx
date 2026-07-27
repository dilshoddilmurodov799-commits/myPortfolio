import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Resume from './components/Resume';
import CurvedLoop from './components/reactbits/CurvedLoop';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'certificates' | 'projects' | 'resume'>('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/certificates') {
      setCurrentPage('certificates');
    } else if (path === '/projects') {
      setCurrentPage('projects');
    } else if (path === '/resume') {
      setCurrentPage('resume');
    } else {
      setCurrentPage('home');
    }

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/certificates') {
        setCurrentPage('certificates');
      } else if (path === '/projects') {
        setCurrentPage('projects');
      } else if (path === '/resume') {
        setCurrentPage('resume');
      } else {
        setCurrentPage('home');
      }
      // Scroll to top when navigating
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Custom navigation function
  useEffect(() => {
    const navigate = (url: string) => {
      if (url === '/certificates') {
        window.history.pushState({}, '', '/certificates');
        setCurrentPage('certificates');
      } else if (url === '/projects') {
        window.history.pushState({}, '', '/projects');
        setCurrentPage('projects');
      } else if (url === '/resume') {
        window.history.pushState({}, '', '/resume');
        setCurrentPage('resume');
      } else {
        window.history.pushState({}, '', '/');
        setCurrentPage('home');
      }
      
      // Scroll to top instantly
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    // Make navigate function globally available
    (window as any).navigateTo = navigate;
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          {currentPage === 'certificates' ? (
            <Certificates />
          ) : currentPage === 'projects' ? (
            <Projects />
          ) : currentPage === 'resume' ? (
            <Resume />
          ) : (
            <>
              <Navigation />
              <Hero />
              <CurvedLoop 
                marqueeText="• Dilshod Dilmurodov • Frontend Developer • Creative UI/UX Designer • Modern Web Experiences • "
                speed={1.5}
                direction="left"
                interactive={true}
                className="text-5xl font-bold text-white"
              />
              <About />
              <Skills />
              <Experience />
              <Education />
              <Portfolio />
              <Contact />
              <Footer />
            </>
          )}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}