import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BriefcaseIcon, CodeBracketIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiPostgresql, SiRedis, SiGit } from 'react-icons/si';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsData = [
    { name: 'React', icon: FaReact, category: 'Frontend', level: 90 },
    { name: 'TypeScript', icon: SiTypescript, category: 'Languages', level: 85 },
    { name: 'JavaScript', icon: SiJavascript, category: 'Languages', level: 90 },
    { name: 'Node.js', icon: FaNodeJs, category: 'Backend', level: 85 },
    { name: 'Python', icon: FaPython, category: 'Languages', level: 80 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend', level: 85 },
    { name: 'MongoDB', icon: SiMongodb, category: 'Database', level: 75 },
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database', level: 80 },
    { name: 'Redis', icon: SiRedis, category: 'Database', level: 70 },
    { name: 'Docker', icon: FaDocker, category: 'DevOps', level: 75 },
    { name: 'AWS', icon: FaAws, category: 'DevOps', level: 70 },
    { name: 'Git', icon: SiGit, category: 'Tools', level: 85 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4">Your Name</h1>
          <p className="text-xl text-gray-400 mb-8">Full Stack Developer</p>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-2xl">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#6e5494' }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#0077b5' }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#1DA1F2' }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.2, color: '#EA4335' }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </header>

      {/* About Section */}
      <section ref={ref} className="py-20 px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate developer focused on creating beautiful and functional web applications.
            With expertise in modern web technologies, I bring ideas to life through clean code and
            intuitive design.
          </p>
        </motion.div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard
              icon={<CodeBracketIcon className="h-12 w-12" />}
              title="Web Development"
              description="Building responsive and performant web applications using modern frameworks and best practices."
            />
            <SkillCard
              icon={<BriefcaseIcon className="h-12 w-12" />}
              title="Problem Solving"
              description="Tackling complex challenges with efficient and scalable solutions."
            />
            <SkillCard
              icon={<AcademicCapIcon className="h-12 w-12" />}
              title="Continuous Learning"
              description="Always staying updated with the latest technologies and industry trends."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Project One"
              description="A full-stack application built with React and Node.js"
              link="https://github.com/yourusername/project-one"
            />
            <ProjectCard
              title="Project Two"
              description="An e-commerce platform with real-time updates"
              link="https://github.com/yourusername/project-two"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-20 h-20 mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <skill.icon className="w-10 h-10 text-blue-400" />
                  </div>
                  <svg className="transform -rotate-90 w-20 h-20">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      className="text-gray-700"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 36}`}
                      strokeDashoffset={`${2 * Math.PI * 36 * (1 - skill.level / 100)}`}
                      className="text-blue-400"
                      initial={{ strokeDashoffset: `${2 * Math.PI * 36}` }}
                      animate={{ strokeDashoffset: `${2 * Math.PI * 36 * (1 - skill.level / 100)}` }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm always open to new opportunities and interesting projects.
          </p>
          <div className="flex justify-center gap-6 text-2xl mb-8">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#6e5494' }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#0077b5' }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#1DA1F2' }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.2, color: '#EA4335' }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-gray-700/50 rounded-lg"
    >
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-gray-700/50 rounded-lg"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300"
      >
        View Project →
      </a>
    </motion.div>
  );
}

export default App;