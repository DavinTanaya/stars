import React from "react";
import { motion } from "framer-motion";
import { Code2, Instagram, Twitter } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const { isDark } = useTheme();

  return (
    <footer
      className={`${
        isDark ? "bg-gray-800" : "bg-gray-100"
      } py-12 transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 mb-8 md:mb-0"
          >
            <Code2
              className={`w-8 h-8 ${
                isDark ? "text-blue-500" : "text-blue-600"
              }`}
            />
            <span className="text-xl font-bold">JasaCoding.id</span>
          </motion.div>
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://wa.me/6285887888265"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDark
                  ? "text-gray-400 hover:text-blue-500"
                  : "text-gray-600 hover:text-blue-600"
              } transition-colors`}
            >
              <FaWhatsapp className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.tiktok.com/@jasacoding.id"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDark
                  ? "text-gray-400 hover:text-blue-500"
                  : "text-gray-600 hover:text-blue-600"
              } transition-colors`}
            >
              <FaTiktok className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.instagram.com/jasacodingid"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDark
                  ? "text-gray-400 hover:text-blue-500"
                  : "text-gray-600 hover:text-blue-600"
              } transition-colors`}
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://x.com/JasaCodingID"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDark
                  ? "text-gray-400 hover:text-blue-500"
                  : "text-gray-600 hover:text-blue-600"
              } transition-colors`}
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>© 2025 JasaCoding.id. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
