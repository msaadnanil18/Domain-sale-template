import { motion } from "framer-motion";
import DomainHero from "@/components/DomainHero";
import ContactForm from "@/components/ContactForm";
import BackgroundPattern from "@/components/BackgroundPattern";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <BackgroundPattern />

      <div className="container mx-auto px-4 py-4 md:py-10 lg:py-17">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <DomainHero />

            <div className="order-1 lg:order-2">
              <ContactForm />
            </div>
          </motion.div>

          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-2 border-t border-border/50 text-center"
          >
            <p className="text-sm text-muted-foreground">
              © 2024 Domain. All rights reserved. | Secure domain transfer
              guaranteed.
            </p>
          </motion.footer>
        </div>
      </div>
    </main>
  );
};

export default Index;
