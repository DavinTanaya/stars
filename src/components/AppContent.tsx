"use client";
import React from "react";
import { useTheme } from "@/hooks/useTheme";

export function AppContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } transition-colors duration-300`}
    >
      Halo Dunia
    </div>
  );
}
