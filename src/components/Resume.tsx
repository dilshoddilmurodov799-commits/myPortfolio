import { Download, Mail, Phone, MapPin, 
  // Github, Linkedin, 
  ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { HoverBorderGradient } from './aceternity/HoverBorderGradient';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GridAndDotBackground } from './aceternity/GridDotBackground';
import FancyBackground from './FancyBackground';
import Footer from './Footer';
// import html2pdf from 'html2pdf.js';

export default function Resume() {
  const { t } = useLanguage();

  const handleDownloadPDF = async () => {
    const element = document.getElementById('resume-content');
    if (!element) return;
    // try {
    //   const opt = {
    //     margin: 0.5,
    //     filename: 'Dilshod_Dilmurodov_Resume.pdf',
    //     image: { type: 'jpeg', quality: 0.98 },
    //     html2canvas: { 
    //       scale: 2, 
    //       useCORS: true,
    //       logging: false,
    //       allowTaint: true
    //     },
    //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    //   };

    //   await html2pdf().set(opt).from(element).save();
    // } catch (error) {
    //   console.error('Error generating PDF:', error);
    // }
  };

  const handleBackHome = () => {
    if ((window as any).navigateTo) {
      (window as any).navigateTo('/');
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Blurry Background Image */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1569396116180-7fe09fa16dd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29kZSUyMHNjcmVlbnxlbnwxfHx8fDE3NTk3NDY0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(40px)',
        }}
      />
      <GridAndDotBackground />
      <FancyBackground variant="multi" />
      
      {/* Glassmorphism container */}
      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
        {/* Header with back button and download */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <Button
            onClick={handleBackHome}
            variant="outline"
            className="backdrop-blur-xl bg-background/30 border-white/20 hover:bg-background/50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('resume.back')}
          </Button>
          
          <HoverBorderGradient
            onClick={handleDownloadPDF}
            containerClassName="rounded-full"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
          >
            <Download className="mr-2 h-4 w-4 inline" />
            {t('hero.downloadCV')}
          </HoverBorderGradient>
        </div>

        {/* Resume Content - Glassmorphism Card */}
        <motion.div
          id="resume-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="backdrop-blur-xl bg-card/40 border-white/10 shadow-2xl max-w-5xl mx-auto">
            <CardContent className="p-8 md:p-12">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12 pb-8 border-b border-white/10">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-500/20">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
                      alt="Dilshod Dilmurodov"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-500/30 mix-blend-overlay"></div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-5xl mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Dilshod Dilmurodov
                  </h1>
                  <p className="text-xl text-muted-foreground mb-4">{t('hero.title')}</p>
                  
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-400" />
                      <span>dilshod@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-purple-400" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-pink-400" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-4 justify-center md:justify-start">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-blue-400 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-blue-400 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <section className="mb-8">
                <h2 className="text-2xl mb-4 text-blue-400">{t('about.title')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.description')}
                </p>
              </section>

              {/* Skills */}
              <section className="mb-8">
                <h2 className="text-2xl mb-4 text-purple-400">{t('skills.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="backdrop-blur-md bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h3 className="mb-3 text-blue-400">{t('skills.frontend')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="backdrop-blur-md bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <h3 className="mb-3 text-purple-400">{t('skills.backend')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express', 'Python', 'RESTful APIs', 'GraphQL', 'Microservices'].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="backdrop-blur-md bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                    <h3 className="mb-3 text-pink-400">{t('skills.database')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-pink-500/20 text-pink-300 border-pink-500/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="backdrop-blur-md bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                    <h3 className="mb-3 text-cyan-400">{t('skills.tools')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'Docker', 'AWS', 'CI/CD', 'Figma', 'Postman'].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section className="mb-8">
                <h2 className="text-2xl mb-4 text-cyan-400">{t('experience.title')}</h2>
                <div className="space-y-6">
                  <div className="backdrop-blur-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl text-blue-400">{t('resume.jobTitle1')}</h3>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">{t('resume.period1')}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{t('resume.company1')} • {t('resume.location1')}</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>{t('resume.job1desc1')}</li>
                      <li>{t('resume.job1desc2')}</li>
                      <li>{t('resume.job1desc3')}</li>
                    </ul>
                  </div>
                  
                  <div className="backdrop-blur-md bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl text-purple-400">{t('resume.jobTitle2')}</h3>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">{t('resume.period2')}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{t('resume.company2')} • {t('resume.location2')}</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>{t('resume.job2desc1')}</li>
                      <li>{t('resume.job2desc2')}</li>
                      <li>{t('resume.job2desc3')}</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="mb-8">
                <h2 className="text-2xl mb-4 text-pink-400">{t('education.title')}</h2>
                <div className="backdrop-blur-md bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-white/10 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl text-pink-400">{t('resume.degree')}</h3>
                    <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30">{t('resume.eduPeriod')}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">{t('resume.university')} • {t('resume.universityLocation')}</p>
                  <p className="text-muted-foreground">{t('resume.gpa')}</p>
                  <ul className="list-disc list-inside space-y-1 mt-3 text-muted-foreground">
                    <li>{t('resume.honor1')}</li>
                    <li>{t('resume.honor2')}</li>
                    <li>{t('resume.honor3')}</li>
                  </ul>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h2 className="text-2xl mb-4 text-orange-400">{t('portfolio.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 rounded-lg p-4">
                    <h3 className="mb-2 text-blue-400">{t('resume.project1')}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('resume.project1desc')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">React</Badge>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">Node.js</Badge>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">MongoDB</Badge>
                    </div>
                  </div>
                  
                  <div className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-lg p-4">
                    <h3 className="mb-2 text-purple-400">{t('resume.project2')}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('resume.project2desc')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">Next.js</Badge>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">TypeScript</Badge>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">PostgreSQL</Badge>
                    </div>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}