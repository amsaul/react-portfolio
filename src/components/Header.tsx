import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-zinc-800"
    >
      <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link to="/">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2"
          >
            <Code2 className="w-8 h-8 text-emerald-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Am Saul
            </span>
          </motion.div>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-emerald-400' : 'text-zinc-400 hover:text-white'}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-emerald-400' : 'text-zinc-400 hover:text-white'}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-emerald-400' : 'text-zinc-400 hover:text-white'}`}
          >
            Contact
          </Link>
          <div className="hidden sm:flex items-center gap-4 ml-4 pl-4 border-l border-zinc-800">
            <motion.a 
              whileHover={{ y: -2 }}
              href="https://github.com/amsaul" 
              target="_blank" 
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a 
              whileHover={{ y: -2 }}
              href="https://linkedin.com" 
              target="_blank"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a 
              whileHover={{ y: -2 }}
              href="mailto:matokesaul@gmail.com"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}