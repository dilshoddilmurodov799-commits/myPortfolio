import { ExternalLink, 
  // Github,
   ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import Slider from 'react-slick';
import { useRef } from 'react';
// import { Slider } from './ui/slider';

const SlickSlider = (Slider as any)?.default ?? Slider;

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack online marketplace with payment integration, inventory management, and real-time analytics.',
    image: 'https://images.unsplash.com/photo-1558181445-eca4774b2a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Real-Time Chat Application',
    description: 'WebSocket-based messaging platform with end-to-end encryption, file sharing, and video calls.',
    image: 'https://images.unsplash.com/photo-1652696290920-ee4c836c711e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    technologies: ['Next.js', 'Socket.io', 'MongoDB', 'WebRTC', 'Docker'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI-Powered Dashboard',
    description: 'Analytics platform with machine learning insights and predictive analytics for business intelligence.',
    image: 'https://images.unsplash.com/photo-1742942965475-25d3b7bf2bfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    technologies: ['TypeScript', 'Python', 'TensorFlow', 'D3.js', 'Redis'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management tool with kanban boards, time tracking, and team analytics.',
    image: 'https://images.unsplash.com/photo-1731917668002-3350dfae3464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    technologies: ['React', 'Express', 'MongoDB', 'Redux', 'Material-UI'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'SaaS platform that helps developers create beautiful portfolios using pre-built templates.',
    image: 'https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Vercel'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Multi-platform social media management tool with scheduling and analytics features.',
    image: 'https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'OAuth', 'Chart.js'],
    github: '#',
    demo: '#',
  },
];

export default function Portfolio() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const sliderRef = useRef<Slider>(null);

  const handleViewAllProjects = () => {
    if ((window as any).navigateTo) {
      (window as any).navigateTo('/projects');
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
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
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t('portfolio.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <div className="mb-8 px-2 md:px-4 max-w-7xl mx-auto">
          <SlickSlider ref={sliderRef} {...settings}>
            {projects.map((project, index) => {
              const cardColors = ['card-blue', 'card-purple', 'card-green', 'card-orange', 'card-pink'];
              const cardColor = cardColors[index % cardColors.length];
              
              return (
              <div key={index} className="px-3 py-4 h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative ${cardColor} bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-2xl border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col h-full`}
                  style={{ minHeight: '480px' }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />
                  
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="relative p-5 sm:p-6 flex flex-col gap-4 flex-1">
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs px-3 py-1 bg-secondary/50 backdrop-blur-sm border border-border/30 hover:bg-secondary/70 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge 
                          variant="secondary" 
                          className="text-xs px-3 py-1 bg-secondary/50 backdrop-blur-sm border border-border/30"
                        >
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        asChild
                        variant="outline" 
                        size="sm" 
                        className="flex-1 group/btn hover:bg-accent/80 border-border/50 backdrop-blur-sm" 
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Mail className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Code
                        </a>
                      </Button>
                      <Button 
                        asChild
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-md hover:shadow-lg transition-all" 
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
            })}
          </SlickSlider>
        </div>

        {/* Custom Navigation Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center gap-4 mb-12"
        >
          <Button
            variant="outline"
            size="icon"
            onClick={() => sliderRef.current?.slickPrev()}
            className="rounded-full w-12 h-12 backdrop-blur-xl bg-card/60 border-border/50 hover:bg-accent/80 hover:border-primary/50 transition-all shadow-md hover:shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-muted-foreground/30 transition-all"
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => sliderRef.current?.slickNext()}
            className="rounded-full w-12 h-12 backdrop-blur-xl bg-card/60 border-border/50 hover:bg-accent/80 hover:border-primary/50 transition-all shadow-md hover:shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button
            onClick={handleViewAllProjects}
            variant="outline"
            size="lg"
            className="backdrop-blur-xl bg-card/40 border-white/20 hover:bg-card/60"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            {t('portfolio.viewAll')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}