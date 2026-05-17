import { motion } from "motion/react";
import { ArrowUp, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-primary-foreground">Devorah Nina Aberman</h3>
            <p className="text-primary-foreground/80">Web & UX/UI Designer</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/devorah-nina-aberman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-primary-foreground hover:text-primary-foreground/80" strokeWidth={1.5} />
            </a>

            <Button
              onClick={scrollToTop}
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Devorah Nina Aberman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
