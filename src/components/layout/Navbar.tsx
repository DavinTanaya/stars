import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { useTheme } from "@/contexts/ThemeContext";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const { t, isIndonesian, toggleLanguage } = useTranslation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav
      className={`fixed w-full z-50 ${
        isDark ? "bg-gray-900/80" : "bg-white/80"
      } backdrop-blur-sm`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">JasaCoding.id</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {t.nav.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => {
                  const target = document.getElementById(item.toLowerCase());
                  if (target) {
                    window.scrollTo({
                      top: target.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
                className="hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-700/20"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="font-medium"
            >
              {isIndonesian ? "EN" : "ID"}
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div
              className={`${
                isDark ? "bg-gray-800" : "bg-white"
              } px-6 py-4 space-y-4`}
            >
              {t.nav.map((item) => (
                <button
                  key={item}
                  className="block hover:text-blue-500 transition-colors w-full text-left"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const target = document.getElementById(
                        item.toLowerCase()
                      );
                      if (target) {
                        const navbarHeight =
                          document.querySelector("nav")?.offsetHeight || 80;
                        const targetPosition =
                          target.getBoundingClientRect().top +
                          window.scrollY -
                          navbarHeight;

                        window.scrollTo({
                          top: targetPosition,
                          behavior: "smooth",
                        });
                      }
                    }, 300); // Delay agar menu tertutup sebelum scrolling
                  }}
                >
                  {item}
                </button>
              ))}
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-700/20"
                >
                  {isDark ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
                <button onClick={toggleLanguage} className="font-medium">
                  {isIndonesian ? "EN" : "ID"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
