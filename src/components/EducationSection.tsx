import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { GraduationCap } from 'lucide-react';

function EducationSection() {
  const education = [
    {
      degree: 'BTech in Computer Science and Engineering',
      school: 'Lovely Professional University',
      year: '2022 – Present',
      cgpa: 'CGPA: 6.20',
      courses: ['Generative AI', 'Object-Oriented Programming', 'Cloud Computing', 'Data Structures']
    },
    {
      degree: 'Intermediate',
      school: 'Kishori Sinha Mahila College',
      year: '2022',
      cgpa: 'Percentage: 65%',
      courses: []
    },
    {
      degree: 'Matriculation',
      school: 'High School Muradpur',
      year: '2020',
      cgpa: 'Percentage: 78%',
      courses: []
    }
  ];

  const certifications = [
    {
      title: 'Core Java Training',
      provider: 'CipherSchools',
      date: 'July 2025'
    },
    {
      title: 'Mastering Data Structures & Algorithms',
      provider: 'TechVanto',
      date: 'March 2025'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-5xl font-bold text-slate-100 mb-12 text-center"
        >
          Education
        </motion.h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg p-8 border border-blue-500/30 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-100 mb-1">{edu.degree}</h3>
                    <p className="text-blue-400 font-semibold mb-1">{edu.school}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <span>{edu.year}</span>
                      <span>{edu.cgpa}</span>
                    </div>
                  </div>
                </div>
                {edu.courses.length > 0 && (
                  <div className="ml-16">
                    <p className="text-slate-400 text-sm mb-3">Relevant Courses:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-slate-700/50 rounded-lg p-6 border border-slate-600/50 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-lg font-bold text-slate-100 mb-2">{cert.title}</h4>
                <p className="text-blue-400 font-medium mb-1">{cert.provider}</p>
                <p className="text-slate-400 text-sm">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default EducationSection;
