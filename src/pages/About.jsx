import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import AnimatedLogo from '../components/ui/AnimatedLogo';
import TeamMemberCard from '../components/about/TeamMemberCard';
import { 
  Shield, 
  Eye, 
  Users, 
  Target,
  Award,
  Lightbulb,
  Sparkles,
  Zap,
  Building,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const { t, currentLanguage } = useLanguage();

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "AI Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Maria Garcia",
      role: "ML Engineer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "David Chen",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sarah Williams",
      role: "AI Strategist",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: t('about.coreValues.innovation.title'),
      description: t('about.coreValues.innovation.description')
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: t('about.coreValues.trust.title'),
      description: t('about.coreValues.trust.description')
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: t('about.coreValues.excellence.title'),
      description: t('about.coreValues.excellence.description')
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: t('about.coreValues.collaboration.title'),
      description: t('about.coreValues.collaboration.description')
    }
  ];

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Section */}
      <SectionWrapper className="min-h-[70vh] flex items-center relative">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(79, 156, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 156, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
        >
          <motion.div variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
            >
              <Building className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t('about.title')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-accent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                {t('about.title')}
              </motion.span>
            </h1>

            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {t('about.subtitle')}
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t('about.founded')}
            </p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800"
            >
              {[
                { value: '200+', label: t('clients') },
                { value: '50+', label: t('projects') },
                { value: '5+', label: t('years') }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 5, 0, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ perspective: 1000 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl rounded-full" />
                <AnimatedLogo size="lg" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6"
            >
              <Target className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t('purpose')}</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {t('missionVision')}
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <div 
                {...missionBorderEventHandlers}
                className="relative w-full h-full overflow-hidden rounded-2xl bg-slate-800/10 backdrop-blur-xl shadow-2xl transition-all duration-500 flex flex-col"
                style={{ 
                  transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  boxShadow: isMissionHovered 
                    ? '0 30px 60px -12px rgba(100, 200, 255, 0.1), 0 0 100px rgba(100, 200, 255, 0.2)' 
                    : '0 20px 40px -12px rgba(0, 0, 0, 0.8)',
                }}
              >
                {/* Animated border canvas */}
                <canvas
                  ref={missionBorderCanvasRef}
                  className="absolute pointer-events-none"
                  style={{ zIndex: 20 }}
                />

                <Card className="p-10 h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all duration-500">
                  {/* Grid background */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(rgba(79, 156, 255, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(79, 156, 255, 0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: '30px 30px'
                    }} />
                  </div>

                  {/* Glowing orb */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-4 shadow-lg shadow-primary/30">
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {t('about.mission.title')}
                      </h2>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {t('about.mission.description')}
                    </p>
                  </div>
                </Card>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div 
                {...visionBorderEventHandlers}
                className="relative w-full h-full overflow-hidden rounded-2xl bg-slate-800/10 backdrop-blur-xl shadow-2xl transition-all duration-500 flex flex-col"
                style={{ 
                  transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  boxShadow: isVisionHovered 
                    ? '0 30px 60px -12px rgba(100, 200, 255, 0.1), 0 0 100px rgba(100, 200, 255, 0.2)' 
                    : '0 20px 40px -12px rgba(0, 0, 0, 0.8)',
                }}
              >
                {/* Animated border canvas */}
                <canvas
                  ref={visionBorderCanvasRef}
                  className="absolute pointer-events-none"
                  style={{ zIndex: 20 }}
                />

                <Card className="p-10 h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-accent/20 relative overflow-hidden group hover:border-accent/40 transition-all duration-500">
                  {/* Grid background */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(rgba(100, 200, 255, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(100, 200, 255, 0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: '30px 30px'
                    }} />
                  </div>

                  {/* Glowing orb */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent/30 group-hover:border-accent transition-colors duration-300" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accent/30 group-hover:border-accent transition-colors duration-300" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent/30 group-hover:border-accent transition-colors duration-300" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent/30 group-hover:border-accent transition-colors duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mr-4 shadow-lg shadow-accent/30">
                        <Eye className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                        {t('about.vision.title')}
                      </h2>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {t('about.vision.description')}
                    </p>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative z-10"
        >
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
            >
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t('coreValues')}</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {t('whatDrivesUs')}
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 max-w-3xl mx-auto text-lg"
            >
              {t('about.coreValues.subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Card className="p-6 h-full bg-gray-800/50 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </div>
                  {/* Animated line effect */}
                  <div 
                    className="w-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700 rounded-full mt-4"
                    style={{
                      width: '60px',
                      boxShadow: '0 0 20px rgba(100, 200, 255, 0.8)',
                      margin: '16px auto 0'
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper className="relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-20">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6"
            >
              <Users className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t('ourTeam')}</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t('about.team.title')}
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 max-w-3xl mx-auto text-lg"
            >
              {t('about.team.subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default About;