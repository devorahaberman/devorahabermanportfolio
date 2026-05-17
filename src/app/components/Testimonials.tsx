import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Card } from "./ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Executive Director",
    organization: "Sammy's Buddy Program",
    quote:
      "Devorah transformed our donation experience and made accessibility a priority. Her thoroughness, communication, and dedication to our mission were exceptional. We saw immediate improvements in donor engagement.",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Founder",
    organization: "Man-Made TV",
    quote:
      "Working with Devorah was seamless. She took the time to understand my work and vision, then created portfolio designs that perfectly showcase my projects. Her design sensibility and attention to detail are outstanding.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Product Manager",
    organization: "Collars Incorporated",
    quote:
      "Devorah quickly became an invaluable part of our design team. Her work on our design system migration and screen redesigns showed both technical skill and creative thinking. She's a collaborative, thoughtful designer.",
  },
  {
    id: "4",
    name: "Lena Hartley",
    role: "Communications Director",
    organization: "Ocean Blue Project",
    quote:
      "Devorah brought clarity and purpose to a project that had a lot of competing voices. She synthesized our stakeholder feedback into a homepage design that everyone felt heard in — and that actually works for our users. Truly impressive facilitation and design work.",
  },
  {
    id: "5",
    name: "Jordan Fiske",
    role: "Volunteer Coordinator",
    organization: "Catchafire",
    quote:
      "Devorah is exactly the kind of volunteer partner nonprofits need — proactive, skilled, and genuinely invested in outcomes. She delivered above and beyond scope on every engagement and left each organization better equipped than when she arrived.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 px-8 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4">What People Say</h2>
          <p className="text-lg text-muted-foreground">
            Testimonials from clients and collaborators
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Card className="p-12 border-border shadow-lg relative overflow-hidden">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/10" />
            <div className="relative z-10">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Card>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
