import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Palette, Users, Lightbulb, Heart } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    "Figma",
    "User Research",
    "Wireframing",
    "Prototyping",
    "Accessibility",
    "Design Systems",
    "Information Architecture",
    "Squarespace",
    "HTML/CSS",
  ];

  const values = [
    {
      icon: Users,
      title: "Human-Centered",
      description: "Designing with empathy and understanding of user needs",
    },
    {
      icon: Lightbulb,
      title: "Strategic",
      description: "Aligning design decisions with business goals",
    },
    {
      icon: Palette,
      title: "Creative",
      description: "Crafting visually compelling and innovative solutions",
    },
    {
      icon: Heart,
      title: "Honest",
      description: "Transparent communication and collaboration",
    },
  ];

  return (
    <section id="about" className="py-24 px-8 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-center">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-16 leading-relaxed">
            I'm a UX/UI designer passionate about creating accessible, user-focused digital experiences.
            With experience spanning nonprofit work, startup environments, and freelance projects,
            I bring a strategic and empathetic approach to every design challenge. I believe great design
            is both beautiful and functional, balancing user needs with business objectives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="mb-8 text-center">Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full border border-border"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="mb-12 text-center">Design Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
                  <value.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h4 className="mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
