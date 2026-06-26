import React, { useState } from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

export default function App() {
  // Brazilian audiences from Google Ads are Portuguese-speaking by default, 
  // but we provide English toggle as an premium feature.
  const [lang, setLang] = useState<"pt" | "en">("pt");

  return (
    <div className="relative min-h-screen flex flex-col font-body selection:bg-purple-100 selection:text-purple-900 overflow-hidden" id="app-container">
      
      {/* 1. Header/Navigation */}
      <Header lang={lang} setLang={setLang} />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* 2. Hero Section - Slide up on initial load */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero lang={lang} />
        </motion.div>

        {/* 3. Services Section - Scroll triggered slide up */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Services lang={lang} />
        </motion.div>

        {/* 4. Why Choose Us Section - Fade in on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <WhyChooseUs lang={lang} />
        </motion.div>

        {/* 5. Contact Section - Scale and fade in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Contact lang={lang} />
        </motion.div>

      </main>

      {/* 6. Footer Section */}
      <Footer lang={lang} />

      {/* 7. Floating WhatsApp Conversion Widget */}
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}
