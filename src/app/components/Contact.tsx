import { motion } from "motion/react";
import { useInView } from "motion/react";
import { FormEvent, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const env = (import.meta as any).env;
    const serviceId = env.VITE_EMAILJS_SERVICE_ID;
    const templateId = env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("Email service is not configured. Please add your EmailJS credentials.");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setFormData({ name: "", email: "", message: "" });
      alert("Message sent! I will get back to you shortly.");
    } catch (error) {
      console.error("Email send error:", error);
      alert("Sorry, something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-8 bg-gray-50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto"> Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full border-border">
              <h3 className="mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <a
                      href="mailto:devorahabermandigital@gmail.com"
                      className="text-primary hover:underline transition-all"
                    >
                      devorahabermandigital@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/devorahaberman/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline transition-all"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-secondary rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Open to:</span> Freelance projects,
                  full-time opportunities, and collaborative ventures in UX/UI design, accessibility, and web design.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 border-border">
              <h3 className="mb-6">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
  <div>
    <Label htmlFor="name">Name</Label>
    <Input
      id="name"
      name="from_name"
      type="text"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      placeholder="Your name"
      required
      className="mt-2"
    />
  </div>

  <div>
    <Label htmlFor="email">Email</Label>
    <Input
      id="email"
      name="from_email"
      type="email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      placeholder="your.email@example.com"
      required
      className="mt-2"
    />
  </div>

  <div>
    <Label htmlFor="message">Message</Label>
    <Textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      placeholder="Tell me about your project or opportunity..."
      required
      rows={5}
      className="mt-2"
    />
  </div>

  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105">
    Send Message
  </Button>
</form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
