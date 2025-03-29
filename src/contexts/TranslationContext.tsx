"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { content } from '@/lib/content';

interface TranslationContextType {
  t: typeof content.en;
  isIndonesian: boolean;
  toggleLanguage: () => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [isIndonesian, setIsIndonesian] = useState(false);
  const toggleLanguage = () => setIsIndonesian(!isIndonesian);
  const t = isIndonesian ? content.id : content.en;

  return (
    <TranslationContext.Provider value={{ t, isIndonesian, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}