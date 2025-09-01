import { motion } from "framer-motion";
import { Globe, Star, Shield, Zap } from "lucide-react";

const DomainHero = () => {
  const features = [
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Premium Domain",
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "Memorable & Brandable",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Secure Transfer",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Fast Acquisition",
    },
  ];

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-soft"
        >
          <Globe className="w-4 h-4" />
          Premium Domain Available
        </motion.div>

        <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold leading-tight mb-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block"
          >
            This Domain is For Sale
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Interested in owning this domain? Let's talk.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border/50 shadow-soft hover:shadow-medium animate-smooth"
          >
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              {feature.icon}
            </div>
            <span className="text-sm font-medium text-center">
              {feature.text}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DomainHero;
