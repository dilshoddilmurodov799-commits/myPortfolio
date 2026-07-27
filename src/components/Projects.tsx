import { ExternalLink, 
  // Github, 
  ArrowLeft, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { GridAndDotBackground } from './aceternity/GridDotBackground';
import Footer from './Footer';
import FancyBackground from './FancyBackground';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack online marketplace with payment integration, inventory management, and real-time analytics.',
    image: 'https://images.unsplash.com/photo-1558181445-eca4774b2a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc1OTQ3NjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Real-Time Chat Application',
    description: 'WebSocket-based messaging platform with end-to-end encryption, file sharing, and video calls.',
    image: 'https://images.unsplash.com/photo-1652696290920-ee4c836c711e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjBzZXR1cHxlbnwxfHx8fDE3NTk0NzYxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Next.js', 'Socket.io', 'MongoDB', 'WebRTC', 'Docker'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI-Powered Dashboard',
    description: 'Analytics platform with machine learning insights and predictive analytics for business intelligence.',
    image: 'https://images.unsplash.com/photo-1742942965475-25d3b7bf2bfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm58ZW58MXx8fHwxNzU5NDQ0NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['TypeScript', 'Python', 'TensorFlow', 'D3.js', 'Redis'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management tool with kanban boards, time tracking, and team analytics.',
    image: 'https://images.unsplash.com/photo-1731917668002-3350dfae3464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMG1vZGVybnxlbnwxfHx8fDE3NTk0NzYxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'Express', 'MongoDB', 'Redux', 'Material-UI'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'SaaS platform that helps developers create beautiful portfolios using pre-built templates.',
    image: 'https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTQ2MDk3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Vercel'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Multi-platform social media management tool with scheduling and analytics features.',
    image: 'https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk0MjkyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'OAuth', 'Chart.js'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with 7-day forecasts, maps, and weather alerts.',
    image: 'https://images.unsplash.com/photo-1558181445-eca4774b2a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc1OTQ3NjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'OpenWeather API', 'Mapbox', 'PWA'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Fitness Tracker',
    description: 'Personal fitness tracking app with workout plans, nutrition tracking, and progress analytics.',
    image: 'https://images.unsplash.com/photo-1652696290920-ee4c836c711e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjBzZXR1cHxlbnwxfHx8fDE3NTk0NzYxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React Native', 'Firebase', 'Chart.js', 'Redux'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Code Snippet Manager',
    description: 'Developer tool for organizing and sharing code snippets with syntax highlighting and tags.',
    image: 'https://images.unsplash.com/photo-1742942965475-25d3b7bf2bfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm58ZW58MXx8fHwxNzU5NDQ0NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['TypeScript', 'Prism.js', 'IndexedDB', 'Electron'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  const { t } = useLanguage();

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
          backgroundImage: 'url(https://images.unsplash.com/photo-1746563947276-f8e40424fd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJhY2tncm91bmQlMjBwYXR0ZXJufGVufDF8fHx8MTc1OTc0NjQwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
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
              {t('projects.back')}
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('projects.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => {
              const cardColors = ['card-blue', 'card-purple', 'card-green', 'card-orange', 'card-pink'];
              const cardColor = cardColors[index % cardColors.length];
              
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <Card className={`overflow-hidden group ${cardColor} backdrop-blur-xl bg-card/40 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}>
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Colorful gradient accent */}
                    <div className={`absolute top-0 right-0 w-24 h-24 opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur-2xl ${
                      index % 3 === 0 ? 'bg-blue-500' : index % 3 === 1 ? 'bg-purple-500' : 'bg-pink-500'
                    }`} />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className={`text-xs ${
                            techIndex % 4 === 0 ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                            techIndex % 4 === 1 ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                            techIndex % 4 === 2 ? 'bg-pink-500/20 text-pink-300 border-pink-500/30' :
                            'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 gap-2 flex-shrink-0">
                    <Button variant="outline" size="sm" className="flex-1" 
                    // asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Mail className="w-4 h-4 mr-2" />
                        {t('projects.code')}
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90" 
                    // asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('projects.demo')}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}