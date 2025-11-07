import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { Mail, Github, Linkedin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // prefer explicit init + send; init ensures the public key is set
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_y2qa76w';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_v2g6fus';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'U03_e8wy-S1wQpMMv';

    try {
      // template params must match the variables used in your EmailJS template
      // use variable names that match your EmailJS template: {{name}}, {{email}}, {{message}}, {{title}}, {{time}}
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      // send using explicit params (more robust than sendForm when template variable names differ)
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      // eslint-disable-next-line no-console
      console.log('EmailJS send result:', result);

      setToast({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setToast(null), 4000);
    } catch (error: any) {
      // show more helpful error and log it so the developer can inspect network/response
      // eslint-disable-next-line no-console
      console.error('EmailJS error:', error);
      const message = error?.text || error?.message || 'Failed to send message, please try again later.';
      setToast({ type: 'error', message });
      setTimeout(() => setToast(null), 6000);
    } finally {
      setLoading(false);
    }
  };

  // initialize EmailJS with the public key (optional - sendForm also accepts the key)
  useEffect(() => {
    try {
      emailjs.init('U03_e8wy-S1wQpMMv');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('EmailJS init warning:', err);
    }
  }, []);

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aakankshas325@gmail.com',
      href: 'mailto:aakankshas325@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Aaakanksha30',
      href: 'https://github.com/Aaakanksha30'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/aakanksha3023',
      href: 'https://linkedin.com/in/aakanksha3023'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
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
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeInUp}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-slate-100">Let's Connect</h3>
            <p className="text-slate-400 leading-relaxed">
              I'm always interested in hearing about new opportunities and projects. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{contact.label}</p>
                      <p className="text-slate-100 font-medium group-hover:text-blue-400 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-lg p-8 border border-slate-600/50"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg font-medium ${
            toast.type === 'success'
              ? 'bg-green-500/20 text-green-400 border border-green-500/50'
              : 'bg-red-500/20 text-red-400 border border-red-500/50'
          }`}
        >
          {toast.message}
        </motion.div>
      )}
    </section>
  );
}

export default ContactSection;
