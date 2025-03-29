import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Code2,
  Users,
  Rocket,
  MessageSquare,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/contexts/TranslationContext";

export function Portfolio() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const features = [
    {
      icon: Shield,
      title: t.portfolio.features.guaranteedQuality.title,
      description: t.portfolio.features.guaranteedQuality.description,
    },
    {
      icon: Clock,
      title: t.portfolio.features.onTimeDelivery.title,
      description: t.portfolio.features.onTimeDelivery.description,
    },
    {
      icon: Code2,
      title: t.portfolio.features.technicalExcellence.title,
      description: t.portfolio.features.technicalExcellence.description,
    },
    {
      icon: Users,
      title: t.portfolio.features.dedicatedSupport.title,
      description: t.portfolio.features.dedicatedSupport.description,
    },
    {
      icon: Rocket,
      title: t.portfolio.features.scalableSolutions.title,
      description: t.portfolio.features.scalableSolutions.description,
    },
    {
      icon: MessageSquare,
      title: t.portfolio.features.clearCommunication.title,
      description: t.portfolio.features.clearCommunication.description,
    },
  ];

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Why Choose Us?
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`${
              isDark ? "bg-gray-800" : "bg-white"
            } p-6 rounded-xl shadow-lg relative overflow-hidden group`}
          >
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${
                isDark ? "bg-blue-500" : "bg-blue-600"
              }`}
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, currentColor 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              }}
            />

            <div className="relative">
              <div
                className={`p-3 rounded-lg inline-block ${
                  isDark ? "bg-blue-500/10" : "bg-blue-600/10"
                } mb-4`}
              >
                <feature.icon
                  className={`w-6 h-6 ${
                    isDark ? "text-blue-500" : "text-blue-600"
                  }`}
                />
              </div>

              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

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
