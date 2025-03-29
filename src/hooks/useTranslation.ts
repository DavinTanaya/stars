import { useState } from 'react';
import { content } from '@/lib/content';

export function useTranslation() {
  const [isIndonesian, setIsIndonesian] = useState(false);
  const toggleLanguage = () => setIsIndonesian(!isIndonesian);
  const t = isIndonesian ? content.id : content.en;

  return { t, isIndonesian, toggleLanguage };
}