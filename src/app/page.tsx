import { ThemeProvider } from "@/contexts/ThemeContext";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { AppContent } from "@/components/AppContent";

export default function Page() {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <AppContent />
      </TranslationProvider>
    </ThemeProvider>
  );
}