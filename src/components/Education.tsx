import { GraduationCap, Award, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Tech University',
    location: 'City, Country',
    period: '2020 - 2024',
    gpa: '3.8/4.0',
    achievements: [
      "Dean's List (All Semesters)",
      'Outstanding Student Award',
      'Recipient of Academic Excellence Scholarship',
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Web Development',
      'Database Systems',
      'Software Engineering',
      'Computer Networks',
      'Cloud Computing',
    ],
  },
];

const featuredCertifications = [
  {
    name: 'IELTS 7.0',
    issuer: 'British Council',
    year: '2024',
  },
  {
    name: 'SAT 1400',
    issuer: 'College Board',
    year: '2024',
  },
  {
    name: 'CEFR C1',
    issuer: 'Language Assessment',
    year: '2024',
  },
];

export default function Education() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  const navigateToCertificates = () => {
    // Use the global navigation function
    if (typeof (window as any).navigateTo === 'function') {
      (window as any).navigateTo('/certificates');
    }
  };

  return (
    <section id="education" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-50">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: theme === 'dark' 
              ? 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)'
              : 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Colorful Blurry Backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 75, 0],
            y: [0, -75, 0],
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 70, 0],
            scale: [1, 1.22, 1],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 45, 0],
            y: [0, -45, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-lime-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('education.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('education.subtitle')}
          </p>
        </motion.div>

        {/* Main Education Card */}
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto mb-12"
          >
            <Card className={`${['card-green', 'card-blue'][index % 2]} border-border bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
              {/* Education Image Banner */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1725738704638-361eac814fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MjI1NjUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="University Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">{edu.degree}</h3>
                        <p className="text-lg text-muted-foreground">{edu.school}</p>
                        <p className="text-muted-foreground">{edu.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{edu.period}</p>
                        <p className="text-muted-foreground">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Achievements */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5" />
                      <h4 className="font-semibold">{t('education.achievements')}</h4>
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Coursework */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="w-5 h-5" />
                      <h4 className="font-semibold">{t('education.coursework')}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} variant="secondary">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Featured Certifications Grid */}
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-center mb-8"
          >
            {t('education.featured')}
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredCertifications.map((cert, index) => {
              const cardColors = ['card-orange', 'card-pink', 'card-purple'];
              const cardColor = cardColors[index % cardColors.length];
              
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`${cardColor} text-center h-full border-border bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group`}>
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent mb-4 group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-sm font-medium">{cert.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
            })}
          </div>

          {/* See All Certificates Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={navigateToCertificates}
              className="group"
            >
              {t('education.seeAll')}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}