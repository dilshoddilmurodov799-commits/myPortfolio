import { Code2, Zap, Target, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import heroImage from '../assets/hero.png';
import BorderGlow from './reactbits/BorderGlow';

export default function About() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              theme === 'dark'
                ? 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)'
                : 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -80, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -90, 0], y: [0, 90, 0], scale: [1, 1.25, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -60, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              fillOpacity={0.35}
              coneSpread={25}
              animated={false}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
              className="h-full md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group relative bg-card hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="h-56 overflow-hidden flex-shrink-0 rounded-[inherit]">
                  <ImageWithFallback
                    src={heroImage}
                    alt="About hero"
                    className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4">{t('about.journey')}</h3>
                  <p className="text-muted-foreground">{t('about.journeyText')}</p>
                </div>
              </motion.div>
            </BorderGlow>

            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              fillOpacity={0.35}
              coneSpread={25}
              animated={false}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
              className="h-full rounded-2xl bg-card p-6 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">{t('about.fullStack')}</h3>
                <p className="text-sm text-muted-foreground">{t('about.fullStackDesc')}</p>
              </motion.div>
            </BorderGlow>

            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              fillOpacity={0.35}
              coneSpread={25}
              animated={false}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
              className="h-full rounded-2xl bg-card p-6 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-semibold mb-2">{t('about.itTech')}</h3>
                <p className="text-sm text-muted-foreground">{t('about.itTechDesc')}</p>
              </motion.div>
            </BorderGlow>

            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              fillOpacity={0.35}
              coneSpread={25}
              animated={false}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
              className="h-full md:col-span-2 rounded-2xl overflow-hidden group relative bg-card hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative grid h-full md:grid-cols-2"
              >
                <div className="h-48 md:h-full overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTQ2MDk3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Technology"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-3">{t('about.techStack')}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{t('about.techStackDesc')}</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'TypeScript', 'Python', 'SQL', 'Docker', 'AWS', 'Next.js'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20 transition-colors cursor-default border border-green-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </BorderGlow>

            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              fillOpacity={0.35}
              coneSpread={25}
              animated={false}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
              className="h-full rounded-2xl bg-card p-6 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">{t('about.problemSolver')}</h3>
                <p className="text-sm text-muted-foreground">{t('about.problemSolverDesc')}</p>
              </motion.div>
            </BorderGlow>

            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              fillOpacity={0.35}
              coneSpread={25}
              animated={false}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
              className="h-full rounded-2xl bg-card p-6 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">{t('about.fastLearner')}</h3>
                <p className="text-sm text-muted-foreground">{t('about.fastLearnerDesc')}</p>
              </motion.div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
}
