import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white via-gray-50 to-green-50">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-5xl md:text-6xl tracking-tight text-foreground">
            Devorah Nina Aberman
          </h1>
          <p className="mb-2 text-xl md:text-2xl text-muted-foreground">
            Web & UX/UI Designer
          </p>
          <p className="mb-12 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Creating intuitive, human centered experiences.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </motion.div>

          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
