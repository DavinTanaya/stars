import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Trophy, Code2, Rocket } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { useTheme } from "@/contexts/ThemeContext";
import type { Project } from "@/lib/types";

export function Portfolio() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = t.portfolio.projects;

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">{t.portfolio.title}</h2>
        <p
          className={`${
            isDark ? "text-gray-400" : "text-gray-600"
          } max-w-2xl mx-auto`}
        >
          {t.portfolio.subtitle}
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project: Project, index: number) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="relative h-56">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4"
                initial={{ y: 0 }}
                whileHover={{ y: -8 }}
              >
                <h3 className="text-lg font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.desc}</p>
                <motion.span
                  className={`inline-flex items-center mt-2 text-xs font-medium ${
                    isDark ? "text-blue-400" : "text-blue-300"
                  }`}
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  View Details <ChevronRight className="w-3 h-3 ml-1" />
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center border-2 border-white"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className={`
                ${isDark ? "bg-gray-900" : "bg-white"} 
                w-full max-w-3xl rounded-xl shadow-2xl 
                my-8 mx-6 max-h-[90vh]
                overflow-hidden
                flex flex-col
              `}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56 flex-shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 text-white hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {selectedProject.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 space-y-5 overflow-y-auto">
                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-2 flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                    Challenge
                  </h4>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {selectedProject.details.challenge}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-2 flex items-center">
                    <Code2 className="w-4 h-4 mr-2 text-blue-500" />
                    Solution
                  </h4>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {selectedProject.details.solution}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-base font-semibold mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {selectedProject.details.features.map(
                        (feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center text-sm"
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                isDark ? "bg-blue-500" : "bg-blue-600"
                              } mr-2`}
                            />
                            {feature}
                          </motion.li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.details.technologies.map(
                        (tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className={`px-2 py-0.5 rounded-full text-xs ${
                              isDark
                                ? "bg-blue-500/10 text-blue-400"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {tech}
                          </motion.span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="#contact"
          className={`inline-flex items-center px-6 py-3 rounded-lg ${
            isDark
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white font-medium transition-colors`}
        >
          Contact Us
          <Rocket className="w-4 h-4 ml-2" />
        </a>
      </motion.div>
    </section>
  );
}
