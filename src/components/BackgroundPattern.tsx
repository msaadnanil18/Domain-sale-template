import { motion } from "framer-motion";

const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      
      {/* Animated floating elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Geometric patterns */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-5">
        <motion.div
          className="w-full h-full border-2 border-primary/30 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="absolute bottom-20 right-10 w-24 h-24 opacity-5">
        <motion.div
          className="w-full h-full border-2 border-accent/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Large gradient orbs */}
      <motion.div
        className="absolute top-1/4 -right-48 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default BackgroundPattern;