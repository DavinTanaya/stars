import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, MessageCircle, Rocket, Trophy, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import { useTheme } from '@/contexts/ThemeContext';

export function ProcessFlow() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const steps = [
    { icon: FileCheck, color: 'from-green-500 to-emerald-700' },
    { icon: MessageCircle, color: 'from-blue-500 to-indigo-700' },
    { icon: Rocket, color: 'from-purple-500 to-violet-700' },
    { icon: Trophy, color: 'from-orange-500 to-red-700' }
  ];

  return (
    <section id='process' className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">{t.process.title}</h2>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
          {t.process.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 relative">
        {t.process.steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative ${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg`}
            >
              <div className="absolute -top-6 left-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${steps[index].color} flex items-center justify-center shadow-lg`}>
                  {React.createElement(steps[index].icon, { className: 'w-6 h-6 text-white' })}
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{step.description}</p>
              </div>
            </motion.div>
            
            {index < steps.length - 1 && (
              <>
                <div className="hidden lg:flex absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`${isDark ? 'text-blue-500' : 'text-blue-600'}`}
                  >
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-8 h-8" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Mobile & Tablet Arrow */}
                <motion.div
                  className="lg:hidden flex justify-center w-full my-4"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex items-center ${isDark ? 'text-blue-500' : 'text-blue-600'}`}>
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-8 h-8 transform rotate-90" />
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}