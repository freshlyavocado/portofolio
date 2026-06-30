"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
};

const projects: Project[] = [
  { 
    id: "01",
    title: "Kubernetes Cluster Setup", 
    description: "Automated provisioning of a highly available Kubernetes cluster across multiple availability zones using Terraform and Ansible.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80",
    techStack: ["Kubernetes", "Terraform", "Ansible", "AWS"],
    link: "#"
  },
  { 
    id: "02",
    title: "CI/CD Pipeline Automation", 
    description: "Designed and implemented a zero-downtime deployment pipeline utilizing GitHub Actions, ArgoCD, and Docker.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&q=80",
    techStack: ["GitHub Actions", "ArgoCD", "Docker", "Go"],
    link: "#"
  },
  { 
    id: "03",
    title: "Monitoring & Logging", 
    description: "Centralized observability stack providing real-time metrics, log aggregation, and alerting for microservices.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    techStack: ["Prometheus", "Grafana", "ELK Stack", "Python"],
    link: "#"
  },
  { 
    id: "04",
    title: "Serverless Deployment", 
    description: "Migrated legacy monolith architecture to event-driven serverless functions, reducing operational costs by 40%.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    techStack: ["AWS Lambda", "API Gateway", "DynamoDB", "Node.js"],
    link: "#"
  },
];

export function Works() {
  return (
    <section id="works" className="w-full px-4 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto py-24">
        
        {/* SECTION HEADER */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-foreground/20 pb-8 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter uppercase mb-4">
              Index
            </h2>
            <p className="text-foreground/60 max-w-xl text-sm leading-relaxed uppercase tracking-widest">
              Selected projects focused on automation, scalable infrastructure, and modern deployment practices.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-foreground/40"
          >
            [ {projects.length} Projects ]
          </motion.div>
        </div>

        {/* ARCHITECTURAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/20 border border-foreground/20">
          {projects.map((project, index) => (
            <motion.article 
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background group relative flex flex-col hover:bg-foreground/5 transition-colors"
            >
              <Link href={project.link} className="flex flex-col h-full">
                
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-foreground/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-background border border-foreground/20 px-3 py-1 text-xs font-bold font-mono">
                    {project.id}
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase pr-8">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  
                  <p className="text-sm text-foreground/60 leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack Footer */}
                  <div className="pt-6 border-t border-foreground/20 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-widest font-bold text-foreground/50 group-hover:text-foreground/80 transition-colors">
                    {project.techStack.join(" / ")}
                  </div>
                </div>

              </Link>
            </motion.article>
          ))}
          
          {/* Odd number filler block (if needed, to maintain grid borders) */}
          {projects.length % 2 !== 0 && (
            <div className="hidden md:block bg-background/50 backdrop-blur" />
          )}
        </div>

      </div>
    </section>
  );
}
