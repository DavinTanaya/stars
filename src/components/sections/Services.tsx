import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, MessageSquare } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import { useTheme } from '@/contexts/ThemeContext';

export function Services() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <section id="services" className="container mx-auto px-6 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, #3B82F6 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, #3B82F6 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, #3B82F6 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, #3B82F6 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, #3B82F6 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center relative"
      >
        {t.services.title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, staggerChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {t.services.items.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ 
              scale: 1.05,
              boxShadow: isDark 
                ? '0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)'
                : '0 20px 25px -5px rgba(37, 99, 235, 0.1), 0 10px 10px -5px rgba(37, 99, 235, 0.04)'
            }}
            className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden`}
          >
            {/* Animated background pattern */}
            <motion.div
              className={`absolute inset-0 opacity-5 ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}
              style={{
                backgroundImage: 'radial-gradient(circle at center, currentColor 1px, transparent 1px)',
                backgroundSize: '10px 10px'
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <div className="relative">
              {index === 0 && <Rocket className={`w-12 h-12 ${isDark ? 'text-blue-500' : 'text-blue-600'} mb-4`} />}
              {index === 1 && <Users className={`w-12 h-12 ${isDark ? 'text-blue-500' : 'text-blue-600'} mb-4`} />}
              {index === 2 && <MessageSquare className={`w-12 h-12 ${isDark ? 'text-blue-500' : 'text-blue-600'} mb-4`} />}
            </div>

            <motion.h3 
              className="text-xl font-bold mb-4 relative"
              whileHover={{
                x: 10,
                transition: { duration: 0.2 }
              }}
            >
              {service.title}
            </motion.h3>

            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} relative`}>
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}