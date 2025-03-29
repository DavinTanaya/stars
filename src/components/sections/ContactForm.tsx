import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { useTheme } from "@/contexts/ThemeContext";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  description: string;
}

interface ContactFormProps {
  isCompact?: boolean;
}

export function ContactForm({ isCompact = false }: ContactFormProps) {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      projectType: "web",
      budget: "0-10",
    },
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowSuccess(true);
        reset({ projectType: "web", budget: "0-10" });
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const inputClasses = `w-full px-3 py-2 rounded-lg text-sm ${
    isDark
      ? "bg-gray-800/50 border-gray-700 focus:ring-blue-500"
      : "bg-white border-gray-300 focus:ring-blue-600"
  } border focus:ring-2 focus:border-transparent`;

  const compactFields = [
    "name",
    "email",
    "phone",
    "projectType",
    "budget",
    "description",
  ];

  return (
    <div className={isCompact ? "" : "container mx-auto px-6 py-20"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={isCompact ? "" : "max-w-3xl mx-auto"}
      >
        <h2 className="text-xl font-bold mb-2">{t.form.title}</h2>
        <p
          className={`${
            isDark ? "text-gray-400" : "text-gray-600"
          } text-sm mb-4`}
        >
          {t.form.subtitle}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(t.form.fields)
              .filter(([field]) => !isCompact || compactFields.includes(field))
              .map(([field, label], index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={field === "description" ? "col-span-2" : ""}
                >
                  <label
                    className="block text-xs font-medium mb-1"
                    htmlFor={field}
                  >
                    {label}
                  </label>
                  {field === "description" ? (
                    <textarea
                      id={field}
                      {...register(field as keyof FormData, { required: true })}
                      rows={3}
                      placeholder="Tell us about your project requirements..."
                      className={`${inputClasses} resize-none`}
                    />
                  ) : field === "projectType" || field === "budget" ? (
                    <select
                      id={field}
                      {...register(field as keyof FormData, { required: true })}
                      className={inputClasses}
                    >
                      <option value="" disabled hidden>
                        Select an option
                      </option>
                      {Object.entries(t.form.options[field]).map(
                        ([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        )
                      )}
                    </select>
                  ) : (
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                          ? "tel"
                          : "text"
                      }
                      id={field}
                      {...register(field as keyof FormData, {
                        required: true,
                        ...(field === "phone" && {
                          pattern: {
                            value: /^[0-9+\s()-]*$/,
                            message: "Enter a valid phone number",
                          },
                        }),
                      })}
                      placeholder={`${label.charAt(0).toUpperCase()}${label
                        .slice(1)
                        .toLowerCase()}`}
                      className={inputClasses}
                    />
                  )}
                  {errors[field as keyof FormData] && (
                    <span className="text-red-500 text-xs">
                      {errors[field as keyof FormData]?.message || "This field is required"}
                    </span>
                  )}
                </motion.div>
              ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={`${
                isDark
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white px-6 py-2.5 rounded-lg font-medium flex items-center transition-colors w-full justify-center text-sm`}
            >
              {t.form.submit}
              <Send className="ml-2 w-4 h-4" />
            </motion.button>
          </motion.div>
        </form>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center"
            >
              <CheckCircle className="w-6 h-6 mr-3" />
              {t.form.success}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}