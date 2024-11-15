import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "EcoTrack",
    description: "A real-time carbon footprint tracking application helping users monitor and reduce their environmental impact. Built with React, Node.js, and MongoDB.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80",
    demo: "#",
    github: "https://github.com",
    tags: ["React", "Node.js", "MongoDB", "WebSockets"]
  },
  {
    title: "FinFlow",
    description: "Personal finance management platform with AI-powered insights and budget forecasting. Utilizing Next.js, PostgreSQL, and TensorFlow.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    demo: "#",
    github: "https://github.com",
    tags: ["Next.js", "PostgreSQL", "AI/ML", "TypeScript"]
  },
  {
    title: "DevMentor",
    description: "AI-powered platform connecting junior developers with mentors through smart matching algorithms. Built with React, GraphQL, and AWS.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
    demo: "#",
    github: "https://github.com",
    tags: ["React", "GraphQL", "AWS", "AI"]
  },
  {
    title: "HealthHub",
    description: "Telemedicine platform enabling secure video consultations and medical record management. Using React Native and Firebase.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    demo: "#",
    github: "https://github.com",
    tags: ["React Native", "Firebase", "WebRTC", "HIPAA"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-colors"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-zinc-800 rounded-full text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}