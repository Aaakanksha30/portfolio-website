import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { Code, Cpu, Database } from 'lucide-react';

function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: ['React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Responsive Design'],
      color: 'from-blue-500/20 to-blue-400/10'
    },
    {
      title: 'Programming Languages',
      icon: Cpu,
      skills: ['JavaScript', 'Python', 'Java', 'C', 'TypeScript'],
      color: 'from-cyan-500/20 to-cyan-400/10'
    },
    {
      title: 'AI & Machine Learning',
      icon: Database,
      skills: ['Generative AI', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Data Analysis', 'LLMs'],
      color: 'from-purple-500/20 to-purple-400/10'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-5xl font-bold text-slate-100 mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${category.color} rounded-lg p-6 border border-slate-700/50 backdrop-blur-sm transition-all hover:border-slate-600`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="p-3 bg-slate-800 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-sm font-medium border border-slate-700/50 hover:border-blue-500/50 hover:text-blue-300 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default SkillsSection;
