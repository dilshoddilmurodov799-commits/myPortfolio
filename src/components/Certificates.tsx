import { useState } from 'react';
import { Award, Download, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { HoverBorderGradient } from './aceternity/HoverBorderGradient';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GridAndDotBackground } from './aceternity/GridDotBackground';
import Footer from './Footer';
import FancyBackground from './FancyBackground';

const allCertificates = [
  // Featured - Best 3
  { 
    name: 'IELTS 7.0', 
    issuer: 'British Council', 
    year: '2024', 
    featured: true,
    category: 'Language',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
  },
  { 
    name: 'SAT 1400', 
    issuer: 'College Board', 
    year: '2024', 
    featured: true,
    category: 'Academic',
    image: 'https://images.unsplash.com/photo-1554224311-beee4ead6c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
  },
  { 
    name: 'CEFR C1', 
    issuer: 'Language Assessment', 
    year: '2024', 
    featured: true,
    category: 'Language',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
  },
  
  // Sololearn
  { name: 'Introduction to HTML', issuer: 'Sololearn', year: '2023', featured: false, category: 'Web Development', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080' },
  { name: 'Introduction to CSS', issuer: 'Sololearn', year: '2023', featured: false, category: 'Web Development', image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080' },
  { name: 'Introduction to JavaScript', issuer: 'Sololearn', year: '2023', featured: false, category: 'Programming', image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080' },
  { name: 'JavaScript Intermediate', issuer: 'Sololearn', year: '2023', featured: false, category: 'Programming', image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080' },
  { name: 'Web Development', issuer: 'Sololearn', year: '2023', featured: false, category: 'Web Development', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080' },
  { name: 'Front-end for Beginners (Angular)', issuer: 'Sololearn', year: '2023', featured: false, category: 'Frontend', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080' },
  { name: 'Introduction to SQL', issuer: 'Sololearn', year: '2023', featured: false, category: 'Database', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080' },
  { name: 'SQL Intermediate', issuer: 'Sololearn', year: '2023', featured: false, category: 'Database', image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080' },
  
  // FreeCodeCamp
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2023', featured: false, category: 'Web Development', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080' },
  { name: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', year: '2023', featured: false, category: 'Programming', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080' },
  
  // IT Park
  { name: 'Front-end Programming', issuer: 'IT Park', year: '2023', featured: false, category: 'Frontend', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080' },
  { name: 'ReactJS Developer', issuer: 'IT Park', year: '2023', featured: false, category: 'Frontend', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080' },
  { name: 'SQL Database Developer', issuer: 'IT Park', year: '2023', featured: false, category: 'Database', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080' },
];

export default function Certificates() {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<typeof allCertificates[0] | null>(null);

  const handleBackHome = () => {
    if ((window as any).navigateTo) {
      (window as any).navigateTo('/');
    }
  };

  const handleDownloadCert = (cert: typeof allCertificates[0]) => {
    alert(`Downloading ${cert.name} certificate...`);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Blurry Background Image */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1701001511816-8a24a3d64d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwYmx1cnxlbnwxfHx8fDE3NTk3NDY0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(40px)',
        }}
      />
      <GridAndDotBackground />
      <FancyBackground variant="multi" />

      <div className="py-12 sm:py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <Button
              onClick={handleBackHome}
              variant="outline"
              className="backdrop-blur-xl bg-background/30 border-white/20 hover:bg-background/50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('certificates.back')}
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('certificates.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('certificates.professionalCerts')}
            </p>
          </motion.div>

          {/* Featured Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8 text-center text-green-400">{t('certificates.featuredCertificates')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {allCertificates.filter(cert => cert.featured).map((cert, index) => {
                const cardColors = ['card-green', 'card-blue', 'card-purple'];
                const cardColor = cardColors[index % cardColors.length];
                
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="h-full"
                >
                  <Card 
                    className={`${cardColor} backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border-border overflow-hidden cursor-pointer group h-full flex flex-col`}
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <Badge className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-green-500/90 text-white text-xs">
                        {t('certificates.featured')}
                      </Badge>
                    </div>
                    <CardContent className="p-4 sm:p-6 flex-1">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-green-500/20 text-green-400 shrink-0">
                          <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="mb-1 text-green-400 truncate text-sm sm:text-base">{cert.name}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-1 truncate">{cert.issuer}</p>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {cert.year}
                            </Badge>
                            <Badge variant="outline" className="text-xs bg-green-500/10">
                              {cert.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
              })}
            </div>
          </motion.div>

          {/* All Other Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8 text-center text-blue-400">{t('certificates.allCerts')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 max-w-7xl mx-auto">
              {allCertificates.filter(cert => !cert.featured).map((cert, index) => {
                const cardColors = ['card-blue', 'card-purple', 'card-green', 'card-orange', 'card-pink'];
                const cardColor = cardColors[index % cardColors.length];
                
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <Card 
                    className={`${cardColor} backdrop-blur-xl bg-card/40 border-border cursor-pointer hover:border-primary/50 transition-all group h-full flex flex-col`}
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="relative h-28 sm:h-32 overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <CardContent className="p-3 sm:p-4 flex-1">
                      <div className="flex items-start gap-2">
                        <div className="p-1 sm:p-1.5 rounded-lg bg-blue-500/20 text-blue-400 shrink-0">
                          <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs sm:text-sm mb-1 truncate">{cert.name}</h3>
                          <p className="text-xs text-muted-foreground truncate">{cert.issuer}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {cert.year}
                            </Badge>
                            <Badge variant="outline" className="text-xs bg-blue-500/10">
                              {cert.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal - Enhanced with smooth animation */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.5
              }}
              className="relative max-w-5xl w-full my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="backdrop-blur-xl bg-card/95 border-white/20 shadow-2xl">
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 text-foreground hover:bg-white/10 z-10"
                    onClick={() => setSelectedCert(null)}
                  >
                    <X className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>

                  <div className="mb-6 sm:mb-8">
                    <motion.div 
                      className="relative rounded-lg overflow-hidden mb-6 bg-muted/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ImageWithFallback
                        src={selectedCert.image}
                        alt={selectedCert.name}
                        className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain mx-auto"
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="p-3 rounded-lg bg-green-500/20 text-green-400 shrink-0">
                        <Award className="w-7 h-7 sm:w-8 sm:h-8" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-2xl md:text-3xl mb-2">{selectedCert.name}</h2>
                        <p className="text-base sm:text-lg text-muted-foreground mb-2">{selectedCert.issuer}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                            {selectedCert.year}
                          </Badge>
                          <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                            {selectedCert.category}
                          </Badge>
                          {selectedCert.featured && (
                            <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <HoverBorderGradient
                      onClick={() => handleDownloadCert(selectedCert)}
                      containerClassName="w-full rounded-full"
                      className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 px-6 py-3"
                    >
                      <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 inline" />
                      <span>{t('certificates.downloadCert')}</span>
                    </HoverBorderGradient>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}