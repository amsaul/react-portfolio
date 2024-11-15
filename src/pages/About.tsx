import { motion } from 'framer-motion';
import { Code, Database, Layout, Sparkles } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: Layout,
    items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend Development",
    icon: Database,
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    category: "UI/UX Design",
    icon: Sparkles,
    items: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"]
  },
  {
    category: "Other Skills",
    icon: Code,
    items: ["Git", "AWS", "CI/CD", "Agile Methodology"]
  }
];

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">
            About <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert max-w-none mb-16"
          >
            <p className="text-lg text-zinc-300 leading-relaxed">
              With 4+ years of experience in web development and design, I've had the privilege of working with startups and established companies alike, helping them build beautiful and functional digital experiences. My passion lies in creating intuitive interfaces that solve real-world problems while maintaining clean, efficient code.
            </p>
            <br />
            <p className="text-lg text-zinc-300 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or mentoring aspiring developers. I believe in continuous learning and staying updated with the latest technologies and best practices in the ever-evolving tech landscape.
            </p>
          </motion.div>

          <h2 className="text-2xl font-bold mb-8">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1 bg-zinc-800 rounded-full text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}