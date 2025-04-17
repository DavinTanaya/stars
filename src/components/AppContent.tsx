"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ProcessFlow } from "@/components/sections/ProcessFlow";
import { Portfolio } from "@/components/sections/Portfolio";
import { TechStack } from "@/components/sections/TechStack";
import { useTheme } from "@/contexts/ThemeContext";
import { WhyChooseUs } from "./sections/WhyChooseUs";

export function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } transition-colors duration-300`}
    >
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Services />
      <ProcessFlow />
      <TechStack />
      <WhyChooseUs />
      <Portfolio />
      <Footer />
    </div>
  );
}
