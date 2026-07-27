import { Code, Database, Globe, Server, Layout, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import TextType from './reactbits/TextType';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

const skillCategories = [
  {
    titleKey: 'skills.frontend',
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'],
    icon: Layout,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    textColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    titleKey: 'skills.backend',
    skills: ['Node.js', 'Express', 'Python', 'RESTful APIs', 'GraphQL', 'Microservices'],
    icon: Server,
    gradient: 'from-purple-500/20 to-pink-500/20',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    textColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    titleKey: 'skills.database',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'SQL'],
    icon: Database,
    gradient: 'from-green-500/20 to-emerald-500/20',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    textColor: 'text-green-600 dark:text-green-400',
  },
  {
    titleKey: 'skills.devops',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx'],
    icon: Wrench,
    gradient: 'from-orange-500/20 to-red-500/20',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    textColor: 'text-orange-600 dark:text-orange-400',
  },
  {
    titleKey: 'skills.languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Bash', 'C++'],
    icon: Code,
    gradient: 'from-yellow-500/20 to-amber-500/20',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
    textColor: 'text-yellow-600 dark:text-yellow-400',
  },
  {
    titleKey: 'skills.webtech',
    skills: ['REST APIs', 'WebSockets', 'OAuth', 'JWT', 'Webpack', 'Vite'],
    icon: Globe,
    gradient: 'from-indigo-500/20 to-violet-500/20',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
    textColor: 'text-indigo-600 dark:text-indigo-400',
  },
];

export default function Skills() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-24 bg-muted/30 relative overflow-hidden">
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
            x: [0, 70, 0],
            y: [0, -70, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('skills.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => {
            const cardColors = ['card-blue', 'card-purple', 'card-green', 'card-orange', 'card-pink', 'card-blue'];
            const cardColor = cardColors[index % cardColors.length];
            
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition duration-500 rounded-2xl"
                style={{
                  background: `linear-gradient(to right, ${category.gradient.replace('from-', '').replace('to-', '')})`,
                }}
              />
              <div className={`${cardColor} relative rounded-2xl border border-border bg-card p-6 hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.gradient}`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{t(category.titleKey)}</h3>
                </div>
                <div className="flex flex-wrap gap-2 flex-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-xs rounded-full ${category.bgColor} ${category.textColor} border ${category.borderColor} hover:scale-105 transition-transform cursor-default whitespace-nowrap inline-flex items-center justify-center`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
          })}
        </div>

        {/* Bottom section with image and text */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          {/* Skill Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1650600538903-ec09f670c391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NjIxNjU1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coding"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            </div>
          </motion.div>

          {/* Continuous Learning Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-semibold mb-6">{t('skills.continuous')}</h3>
            <div className="text-lg text-muted-foreground">
              <TextType
                text={t('skills.continuousText')}
                speed={30}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}