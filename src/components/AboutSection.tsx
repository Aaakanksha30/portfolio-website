import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-5xl font-bold text-slate-100 mb-8 text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-8 border border-slate-600/50"
        >
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I'm a BTech Computer Science and Engineering student at Lovely Professional University with a passion for building innovative software solutions. My journey in technology is driven by curiosity and a constant desire to learn and evolve.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I specialize in full-stack web development with expertise in React, JavaScript, and modern web technologies. My focus areas include artificial intelligence, machine learning, and cloud computing. I believe in writing clean, efficient code and creating applications that make a real-world impact.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Through various projects and learning experiences, I've developed strong problem-solving skills and hands-on experience with industry-standard tools and frameworks. I'm always excited to take on new challenges and collaborate on innovative projects.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
