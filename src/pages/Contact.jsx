import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@illustrateur.com",
      link: "mailto:contact@illustrateur.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 6 12 34 56 78",
      link: "tel:+33612345678"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Paris, France",
      link: null
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold text-charcoal mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Contact
          </motion.h1>
          <motion.p
            className="text-lg text-charcoal/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Une idée, un projet ? N'hésitez pas à me contacter
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-6">
                Restons en contact
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                Je suis toujours à l'écoute de nouveaux projets créatifs et
                de collaborations passionnantes. Que vous ayez une question
                ou simplement envie de dire bonjour, je serai heureux de
                vous répondre !
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="p-3 bg-gradient-to-br from-accent/20 to-soft-blue/20 rounded-lg">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-charcoal/60 mb-1">
                        {info.title}
                      </div>
                      <div className="font-medium text-charcoal">
                        {info.value}
                      </div>
                    </div>
                  </motion.div>
                );

                return info.link ? (
                  <a key={info.title} href={info.link} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.title} className="block">{content}</div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-6 border-t border-charcoal/10"
            >
              <p className="text-sm text-charcoal/60 mb-4">Suivez-moi sur</p>
              <div className="flex gap-4">
                {['Instagram', 'Behance', 'Dribbble'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="px-4 py-2 bg-charcoal/5 hover:bg-charcoal hover:text-cream rounded-lg text-sm font-medium transition-colors"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Nom complet
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      animate={{
                        scale: focusedField === 'name' ? 1.02 : 1,
                      }}
                      className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-lg focus:border-accent focus:outline-none transition-all"
                      placeholder="Jean Dupont"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      animate={{
                        scale: focusedField === 'email' ? 1.02 : 1,
                      }}
                      className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-lg focus:border-accent focus:outline-none transition-all"
                      placeholder="jean.dupont@email.com"
                    />
                  </motion.div>

                  {/* Subject Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Sujet
                    </label>
                    <motion.input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      animate={{
                        scale: focusedField === 'subject' ? 1.02 : 1,
                      }}
                      className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-lg focus:border-accent focus:outline-none transition-all"
                      placeholder="Collaboration pour un projet"
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      animate={{
                        scale: focusedField === 'message' ? 1.02 : 1,
                      }}
                      className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-lg focus:border-accent focus:outline-none transition-all resize-none"
                      placeholder="Parlez-moi de votre projet..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-8 py-4 bg-charcoal text-cream rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Envoyer le message
                    <Send size={20} />
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <CheckCircle size={64} className="text-accent mx-auto mb-6" />
                  </motion.div>
                  <h3 className="font-display text-3xl font-bold text-charcoal mb-4">
                    Message envoyé !
                  </h3>
                  <p className="text-charcoal/70">
                    Merci pour votre message. Je vous répondrai dans les plus
                    brefs délais.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
