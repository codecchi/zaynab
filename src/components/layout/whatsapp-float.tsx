"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/content";

/** Floating WhatsApp button — rendered only when a WhatsApp number is configured. */
export function WhatsAppFloat() {
  const href = whatsappLink();
  if (!href) return null;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-[#1f7a4d] text-white shadow-[0_12px_30px_-10px_rgba(16,28,44,0.6)] transition-transform hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <MessageCircle className="size-6" aria-hidden />
    </motion.a>
  );
}
