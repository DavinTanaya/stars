import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/sections/ContactForm';
import { useTranslation } from '@/contexts/TranslationContext';
import { useTheme } from '@/contexts/ThemeContext';

export function Hero() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id='contact' className="min-h-screen container mx-auto px-6 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              isDark ? 'bg-blue-500/5' : 'bg-blue-600/5'
            } rounded-full w-[500px] h-[500px]`}
            style={{
              left: `${i * 30 - 20}%`,
              top: `${i * 20 - 10}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-24 lg:pt-0 w-full relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:sticky lg:top-32"
        >
          <motion.div animate={floatingAnimation}>
            <motion.h1 
              className="text-3xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t.hero.title}{' '}
              <motion.span
                className={`${isDark ? 'text-blue-500' : 'text-blue-600'} inline-block`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {t.hero.highlight}
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            {t.hero.features.map((feature, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'} mr-2`} />
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className={`${isDark ? 'bg-gray-800/50' : 'bg-white'} p-6 rounded-xl shadow-xl backdrop-blur-sm relative`}
        >
          <ContactForm isCompact />
        </motion.div>
      </div>
    </section>
  );
}