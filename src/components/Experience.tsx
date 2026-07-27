import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import Timeline from './aceternity/Timeline';

export default function Experience() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  const experiences = [
    {
      title: t('experience.job1.title'),
      content: (
        <div>
          <div className="mb-4">
            <p className="text-muted-foreground mb-2">{t('experience.job1.company')} • {t('experience.job1.location')}</p>
            <p className="text-sm text-muted-foreground">{t('experience.job1.period')}</p>
          </div>
          <div className="relative mb-4 rounded-xl overflow-hidden border border-border max-w-md">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1731917668002-3350dfae3464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMG1vZGVybnxlbnwxfHx8fDE3NTk0NzYxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Tech Innovations"
              className="w-full h-48 object-cover"
            />
          </div>
          <p className="text-muted-foreground mb-4">
            {t('experience.job1.desc')}
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: t('experience.job2.title'),
      content: (
        <div>
          <div className="mb-4">
            <p className="text-muted-foreground mb-2">{t('experience.job2.company')} • {t('experience.job2.location')}</p>
            <p className="text-sm text-muted-foreground">{t('experience.job2.period')}</p>
          </div>
          <div className="relative mb-4 rounded-xl overflow-hidden border border-border max-w-md">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTQ2MDk3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Digital Solutions"
              className="w-full h-48 object-cover"
            />
          </div>
          <p className="text-muted-foreground mb-4">
            {t('experience.job2.desc')}
          </p>
          <div className="flex flex-wrap gap-2">
            {['Windows Server', 'Linux', 'Networking', 'Hardware', 'Security'].map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: t('experience.job3.title'),
      content: (
        <div>
          <div className="mb-4">
            <p className="text-muted-foreground mb-2">{t('experience.job3.company')} • {t('experience.job3.location')}</p>
            <p className="text-sm text-muted-foreground">{t('experience.job3.period')}</p>
          </div>
          <div className="relative mb-4 rounded-xl overflow-hidden border border-border max-w-md">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk0MjkyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="StartUp Hub"
              className="w-full h-48 object-cover"
            />
          </div>
          <p className="text-muted-foreground mb-4">
            {t('experience.job3.desc')}
          </p>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'Express', 'MongoDB', 'Git', 'REST APIs'].map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
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
            x: [0, 90, 0],
            y: [0, -90, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 55, 0],
            y: [0, -55, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('experience.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <Timeline data={experiences} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="card-purple border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">{t('experience.achievements')}</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1">▹</span>
                  <span>{t('experience.achievement1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">▹</span>
                  <span>{t('experience.achievement2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">▹</span>
                  <span>{t('experience.achievement3')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}