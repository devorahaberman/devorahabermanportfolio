import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import updatedDonationPage from "../../imports/updated-donation-page.png";
import mannMadeProjects from "../../imports/mann-made-projects.png";
import sammysAccessibility from "../../imports/Screenshot_2025-10-16_125720.png";
import oceanBlue from "../../imports/Screenshot_2026-05-15_105937.png";
import collarsIncImage from "../../imports/Job_Card_Instagram_Post.png";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ArrowDown } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface Project {
  id: string;
  title: string;
  role: string;
  summary: string;
  tools: string;
  image: string;
  caseStudy: {
    problem: string;
    process: string[];
    outcomes: string[];
    challenges?: string[];
    solutions?: string[];
    constraints?: string[];
  };
}

const projects: Project[] = [
  {
    id: "sammys-donation",
    title: "Sammy's Buddy Program – Donation Experience Redesign",
    role: "Volunteer Web Designer",
    summary:
      "I partnered with Sammy's Buddy Program through Catchafire to redesign their donation experience and later evaluate their website accessibility. I researched and integrated a modern third‑party donation platform into their Squarespace site, improving clarity, usability, and donor trust.",
    tools: "Figma, Givebutter, Squarespace, Donorbox",
    image: updatedDonationPage,
    caseStudy: {
      problem:
        "Sammy's Buddy Program's existing donation system was confusing, lacked transparency, and didn't inspire donor confidence. The organization needed a solution that was easy to implement, trustworthy, and aligned with modern UX standards.",
      process: [
        "Platform Research: Evaluated multiple donation platforms (Givebutter, Donorbox, PayPal) against criteria including ease of integration, transparency, customization, and user trust.",
        "Stakeholder Collaboration: Worked closely with the organization to understand their needs, budget constraints, and technical capabilities.",
        "Implementation: Integrated the selected platform (Givebutter) into their Squarespace site with custom styling to match brand identity.",
        "Issue Resolution: Troubleshot technical challenges during implementation and provided documentation for ongoing maintenance.",
      ],
      outcomes: [
        "Streamlined donation flow that reduced friction and increased clarity",
        "Improved donor trust through transparent, professional payment interface",
        "Seamless integration with existing Squarespace infrastructure",
        "Comprehensive documentation for future updates and maintenance",
      ],
      challenges: [
        "Limited budget and technical resources",
        "Balancing customization with platform constraints",
        "Ensuring mobile responsiveness across all donation flows",
        "Maintaining brand consistency while using third-party tools",
      ],
    },
  },
  {
    id: "sammys-accessibility",
    title: "Sammy's Buddy Program – Accessibility Audit",
    role: "Volunteer Web Designer",
    summary:
      "I conducted a full accessibility audit, identified compliance gaps, and delivered a prioritized action plan to help the organization improve inclusivity.",
    tools: "WCAG, Toptal Color Picker, WAVE",
    image: sammysAccessibility,
    caseStudy: {
      problem:
        "Following the donation redesign, the organization wanted to ensure their website was accessible to all users, including those with disabilities. They needed to understand where they stood against WCAG standards and what steps to take.",
      process: [
        "Research: Studied WCAG 2.1 AA standards and best practices for web accessibility.",
        "Tooling: Utilized automated tools (WAVE, Toptal Color Picker) and manual testing to identify issues.",
        "Analysis: Documented accessibility violations across color contrast, keyboard navigation, screen reader compatibility, and semantic HTML.",
        "Prioritization: Created a roadmap ranking issues by severity and impact.",
      ],
      solutions: [
        "Color contrast adjustments to meet WCAG AA standards",
        "Alt text additions for all meaningful images",
        "Semantic HTML improvements for better screen reader support",
        "Keyboard navigation enhancements",
        "Form label and error message accessibility fixes",
      ],
      outcomes: [
        "Comprehensive accessibility audit report with actionable recommendations",
        "Prioritized roadmap for phased implementation",
        "Increased awareness of accessibility within the organization",
        "Foundation for ongoing accessibility improvements",
      ],
      constraints: [
        "Limited development resources within the organization",
        "Squarespace platform limitations for certain accessibility features",
        "Need to balance quick wins with long-term structural improvements",
      ],
    },
  },
  {
    id: "manmade-tv",
    title: "Man-Made TV – Business Portfolio Page Design",
    role: "Freelance Web Designer",
    summary:
      "I designed new portfolio pages and an About page for a motion graphics professional, transforming large volumes of media into clear, compelling layouts using Figma.",
    tools: "Figma",
    image: mannMadeProjects,
    caseStudy: {
      problem:
        "A motion graphics professional needed to showcase their extensive portfolio in a way that was both visually compelling and easy to navigate. The existing setup lacked structure and didn't effectively communicate the breadth and quality of their work.",
      process: [
        "Understanding the System: Analyzed the existing content structure and identified key categories and showcase opportunities.",
        "Structuring Pages: Developed an information architecture that organized projects by type, industry, and client.",
        "Designing for Media-Heavy Content: Created layouts that balanced large video embeds, project descriptions, and navigation without overwhelming the user.",
        "About Page Research: Researched portfolio best practices and designed an About page that told the client's story while maintaining professional credibility.",
      ],
      outcomes: [
        "High-fidelity Figma designs for portfolio and About pages",
        "Clear content hierarchy that guides users through projects",
        "Scalable design system for future portfolio additions",
        "Positive client feedback and successful handoff to developer",
      ],
      challenges: [
        "Balancing visual impact with page load performance",
        "Creating a flexible system that accommodates various project types",
        "Ensuring designs were feasible within the client's development constraints",
        "Maintaining focus and clarity despite high volume of content",
      ],
    },
  },
  {
    id: "collars-inc",
    title: "Collars Incorporated – Digital Interface Internship",
    role: "Interface Design Intern",
    summary:
      "I migrated the app's design system from Sketch to Figma, built a scalable component library, redesigned screens, created prototypes, and supported marketing and engineering teams.",
    tools: "Figma, Sketch",
    image: collarsIncImage,
    caseStudy: {
      problem:
        "Collars Incorporated was transitioning from Sketch to Figma and needed to rebuild their design system while maintaining consistency across the product. Additionally, several app screens needed redesigns to improve usability and visual appeal.",
      process: [
        "Migration: Systematically transferred design assets, components, and documentation from Sketch to Figma.",
        "Design System: Built a comprehensive component library with variants, auto-layout, and clear documentation.",
        "Screen Design: Redesigned key app screens focusing on user flow, visual hierarchy, and accessibility.",
        "Cross-Functional Support: Collaborated with marketing on brand assets and with engineering on implementation specs.",
        "QA Testing: Participated in testing cycles to ensure designs were implemented accurately.",
      ],
      outcomes: [
        "Complete Figma design system with 50+ components",
        "Redesigned 12+ app screens with improved usability metrics",
        "Interactive prototypes for user testing and stakeholder presentations",
        "Documentation that enabled seamless designer-developer handoff",
        "Reduced design-to-development time by 30%",
      ],
      challenges: [
        "Maintaining design consistency during migration",
        "Learning new design system paradigms and Figma best practices",
        "Balancing multiple workstreams (migration, redesign, cross-functional support)",
        "Ensuring backward compatibility with existing product features",
      ],
    },
  },
  {
    id: "ocean-blue",
    title: "Ocean Blue Project – Homepage Redesign",
    role: "Volunteer Web Designer",
    summary:
      "I translated stakeholder ideas into a streamlined, SEO-conscious homepage through wireframing, prototyping, and documentation.",
    tools: "Figma",
    image: oceanBlue,
    caseStudy: {
      problem:
        "Ocean Blue Project needed a homepage redesign that would better communicate their mission, improve user navigation, and support SEO goals. The existing homepage lacked clear information hierarchy and didn't effectively guide visitors to key actions.",
      process: [
        "Stakeholder Input: Gathered requirements and content priorities from multiple stakeholders through interviews and workshops.",
        "Structuring: Developed an information architecture that organized content logically and supported user goals.",
        "Wireframing: Created low-fidelity wireframes to establish layout, hierarchy, and content placement.",
        "Prototyping: Built interactive prototypes in Figma to demonstrate user flows and gather feedback.",
        "Documentation: Delivered comprehensive design documentation including annotations, specifications, and implementation notes.",
      ],
      outcomes: [
        "Streamlined homepage structure with clear information hierarchy",
        "Interactive prototype validated by stakeholders and users",
        "SEO-friendly content organization and structure",
        "Complete design documentation for development handoff",
        "Improved clarity around the organization's mission and impact",
      ],
      challenges: [
        "Balancing diverse stakeholder input and priorities",
        "Creating a design that works for varied user audiences",
        "Ensuring SEO best practices were integrated into UX decisions",
        "Managing content volume while maintaining visual clarity",
      ],
    },
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-24 px-8 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selected work showcasing my approach to UX/UI design, accessibility, and user-centered problem solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh]">
            <ScrollArea className="h-full pr-4">
              {selectedProject && <CaseStudy project={selectedProject} />}
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
  onSelect: () => void;
}

function ProjectCard({ project, index, isInView, onSelect }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <Card className="overflow-hidden border-border hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className={`absolute inset-0 bg-primary/95 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
              <h4 className="mb-3 text-white">Executive Summary</h4>
              <p className="text-sm leading-relaxed text-white/90">{project.summary}</p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isHovered ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="mt-4 flex items-center gap-2 text-sm"
              >
                <span>Read full case study</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-2 line-clamp-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{project.role}</p>
          <p className="text-sm text-muted-foreground mb-4">
            <span className="font-medium text-foreground">Tools:</span> {project.tools}
          </p>
          <Button
            onClick={onSelect}
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            See More →
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="space-y-8 py-6">
      <DialogHeader>
        <DialogTitle className="text-3xl mb-2">{project.title}</DialogTitle>
        <DialogDescription className="sr-only">
          Full case study for {project.title}
        </DialogDescription>
        <p className="text-muted-foreground">{project.role}</p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Tools:</span> {project.tools}
        </p>
      </DialogHeader>

      <div>
        <h3 className="mb-3 text-primary">Problem</h3>
        <p className="text-foreground leading-relaxed">{project.caseStudy.problem}</p>
      </div>

      <div>
        <h3 className="mb-3 text-primary">Process</h3>
        <ul className="space-y-3">
          {project.caseStudy.process.map((step, index) => (
            <li key={index} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                {index + 1}
              </span>
              <span className="text-foreground leading-relaxed pt-0.5">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.caseStudy.solutions && (
        <div>
          <h3 className="mb-3 text-primary">Solutions</h3>
          <ul className="space-y-2">
            {project.caseStudy.solutions.map((solution, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-primary">•</span>
                <span className="text-foreground leading-relaxed">{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h3 className="mb-3 text-primary">Outcomes</h3>
        <ul className="space-y-2">
          {project.caseStudy.outcomes.map((outcome, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-primary">✓</span>
              <span className="text-foreground leading-relaxed">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.caseStudy.challenges && (
        <div>
          <h3 className="mb-3 text-primary">Challenges</h3>
          <ul className="space-y-2">
            {project.caseStudy.challenges.map((challenge, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-primary">•</span>
                <span className="text-foreground leading-relaxed">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.caseStudy.constraints && (
        <div>
          <h3 className="mb-3 text-primary">Constraints</h3>
          <ul className="space-y-2">
            {project.caseStudy.constraints.map((constraint, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-primary">•</span>
                <span className="text-foreground leading-relaxed">{constraint}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
