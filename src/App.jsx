import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Cpu, Globe, Mail, Rocket, BookOpen, MessageSquare, Terminal } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const ProjectCard = ({ title, desc, tags }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl hover:border-purple-500/50 transition-colors"
  >
    <div className="h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl mb-6 border border-white/5 flex items-center justify-center">
        <Terminal size={40} className="text-purple-500/30" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{desc}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1 rounded-full">{tag}</span>
      ))}
    </div>
    <div className="flex gap-4 text-white/50">
      <Github size={20} className="hover:text-white cursor-pointer transition" />
      <ExternalLink size={20} className="hover:text-white cursor-pointer transition" />
    </div>
  </motion.div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 py-5">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            SAUGAT.DEV
          </span>
          <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-medium text-gray-400">
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#contact" className="px-5 py-2 bg-white text-black rounded-full hover:bg-purple-500 hover:text-white transition">Support Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold tracking-widest uppercase mb-8 inline-block">
                Class 11 Student & Full-Stack Aspirant
            </span>
            <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-none">
              SAUGAT <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-400 to-blue-500">BHATTARAI</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10">
              Crafting scalable web applications with <span className="text-white">React & Node.js</span>. 
              Bridging the gap between design and high-performance backend systems.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href="#projects" className="px-8 py-4 bg-purple-600 rounded-full font-bold hover:bg-purple-700 transition shadow-lg shadow-purple-500/20">View My Work</a>
                <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition">Let's Talk</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <FadeIn>
                <h2 className="text-4xl font-bold mb-8">Passionate about <br/> <span className="text-purple-500">Full Stack Engineering</span></h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    I am currently a student in <strong>Class 11</strong>, dedicated to mastering the art of software development. While my peers focus on textbooks, I'm building environments in Three.js and managing databases in Node.js.
                </p>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-bold text-white">Current Aim</h4>
                        <p className="text-sm text-gray-500">MERN Stack Mastery</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Focus</h4>
                        <p className="text-sm text-gray-500">Performance & UI/UX</p>
                    </div>
                </div>
            </FadeIn>
            <FadeIn delay={0.2}>
                <div className="relative">
                    <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20" />
                    <div className="bg-white/5 border border-white/10 p-10 rounded-3xl relative">
                        <Rocket className="text-purple-500 mb-6" size={40} />
                        <h3 className="text-2xl font-bold mb-4">Class 11 & Coding</h3>
                        <p className="text-gray-400 italic">"Learning the foundations of computer science while building real-world projects."</p>
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
        <FadeIn>
            <h2 className="text-5xl font-bold mb-16 text-center">Selected <span className="text-blue-500">Works</span></h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard title="Portfolio" desc="A React First Portfolio Website" tags={['Three.js', 'React', 'Audio API']} />
          <ProjectCard title="Node Task Manager" desc="I am currently learning Node.js and MongoDB." tags={['Node.js', 'MongoDB', 'JWT']} />
          <ProjectCard title="Portfolio v1" desc="A glassmorphic React portfolio showcasing modern animation techniques." tags={['Framer Motion', 'Tailwind']} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5">
        <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 bg-gradient-to-br from-purple-900/40 to-black p-12 rounded-[2rem] border border-white/10">
                    <Code2 className="mb-6 text-purple-400" size={32} />
                    <h3 className="text-3xl font-bold mb-4 italic">Frontend</h3>
                    <p className="text-gray-400 text-lg"> I am currently learning React.js, Next.js, Three.js, Tailwind CSS, Framer Motion.</p>
                </div>
                <div className="md:col-span-2 bg-gradient-to-br from-blue-900/40 to-black p-12 rounded-[2rem] border border-white/10">
                    <Terminal className="mb-6 text-blue-400" size={32} />
                    <h3 className="text-3xl font-bold mb-4 italic">Backend</h3>
                    <p className="text-gray-400 text-lg">I am currently learning Node.js, Express, MongoDB, PostgreSQL, REST APIs.</p>
                </div>
            </div>
        </FadeIn>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-white/5 to-transparent p-16 rounded-[3rem] border border-white/10 text-center">
            <FadeIn>
                <Mail className="mx-auto mb-8 text-purple-500" size={48} />
                <h2 className="text-5xl font-bold mb-6">Start a Project?</h2>
                <p className="text-gray-400 text-xl mb-10">I am currently Learning Web developing .</p>
                <a href="mailto:your-email@example.com" className="text-2xl font-bold underline hover:text-purple-400 transition">
                    saugat.bhattarai@email.com
                </a>
                <p className="text-gray-400 text-xl mb-10 mt-6">The Gmail is only for Practice .</p>
            </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 text-xs uppercase tracking-widest border-t border-white/5">
        &copy; 2025 Saugat Bhattarai. All Rights Reserved.
      </footer>
    </div>
  );
}