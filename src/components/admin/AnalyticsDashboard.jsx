import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import LoadingSpinner from '../ui/LoadingSpinner';
import { 
  Users, 
  Eye, 
  MousePointerClick, 
  Clock, 
  BarChart3,
  TrendingUp,
  Globe
} from 'lucide-react';

const AnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setAnalyticsData({
        totalVisitors: 12540,
        pageViews: 45210,
        bounceRate: 32.5,
        avgSessionDuration: "4m 22s",
        topPages: [
          { page: "/", visits: 5420 },
          { page: "/services", visits: 3210 },
          { page: "/about", visits: 2870 },
          { page: "/contact", visits: 2150 },
          { page: "/case-studies", visits: 1980 }
        ],
        languageUsage: [
          { language: "English", percentage: 68 },
          { language: "German", percentage: 32 }
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        variants={itemVariants}
        className="text-2xl font-bold flex items-center mb-6"
      >
        <BarChart3 className="w-6 h-6 mr-2 text-primary" />
        Analytics Dashboard
      </motion.h2>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div variants={itemVariants}>
          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">
              {analyticsData.totalVisitors.toLocaleString()}
            </div>
            <div className="text-gray-400">Total Visitors</div>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <Eye className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-2">
              {analyticsData.pageViews.toLocaleString()}
            </div>
            <div className="text-gray-400">Page Views</div>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <MousePointerClick className="w-6 h-6 text-accent" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">
              {analyticsData.bounceRate}%
            </div>
            <div className="text-gray-400">Bounce Rate</div>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-purple-500 mb-2">
              {analyticsData.avgSessionDuration}
            </div>
            <div className="text-gray-400">Avg. Session</div>
          </Card>
        </motion.div>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <motion.div variants={itemVariants}>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-primary" />
              Top Pages
            </h3>
            <div className="space-y-3">
              {analyticsData.topPages.map((page, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-32 text-gray-400 truncate">{page.page}</div>
                  <div className="flex-grow mx-4">
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        style={{ width: `${(page.visits / analyticsData.topPages[0].visits) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-16 text-right">{page.visits}</div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
        
        {/* Language Usage */}
        <motion.div variants={itemVariants}>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-primary" />
              Language Usage
            </h3>
            <div className="space-y-4">
              {analyticsData.languageUsage.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{lang.language}</span>
                    <span>{lang.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnalyticsDashboard;