import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Heart, Zap, Award, Users, Coffee } from 'lucide-react';

const skills = [
  { name: "Illustration digitale", level: 95 },
  { name: "Aquarelle", level: 88 },
  { name: "Character Design", level: 92 },
  { name: "Storyboarding", level: 85 },
  { name: "Animation 2D", level: 78 },
  { name: "Typography", level: 90 },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Chaque projet est une nouvelle aventure créative que j'aborde avec enthousiasme"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Toujours à la recherche de nouvelles techniques et styles pour se démarquer"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Le travail d'équipe et l'écoute sont au cœur de ma démarche artistique"
  },
];

const achievements = [
  { icon: Award, text: "Prix du Meilleur Illustrateur 2023" },
  { icon: Palette, text: "200+ projets complétés" },
  { icon: Coffee, text: "1000+ tasses de café consommées" },
];

const About = () => {
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold text-charcoal mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            À propos
          </motion.h1>
          <motion.p
            className="text-lg text-charcoal/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Découvrez mon parcours et ma vision artistique
          </motion.p>
        </motion.div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ rotate: 3, scale: 1.02 }}
              className="aspect-square rounded-3xl overflow-hidden shadow-xl relative"
            >
              <img
                src="/images/gallery/jeandupont.jpg"
                alt="Jean Dupont - Illustrateur"
                className="w-full h-full object-cover"
              />

              {/* Decorative elements */}
              <motion.div
                className="absolute top-4 right-4 w-20 h-20 border-4 border-accent/50 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-16 h-16 bg-soft-blue/30 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">
              Bonjour, je suis{' Jean Dupont '}
              <span className="text-accent">Illustrateur</span>
            </h2>

            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                Passionné par l'art depuis mon enfance, j'ai transformé ma passion
                en carrière il y a plus de 5 ans. Mon travail se caractérise par
                un mélange unique de techniques traditionnelles et digitales.
              </p>
              <p>
                Chaque projet est une opportunité de raconter une histoire unique
                et de créer des visuels qui résonnent avec le public. Je crois
                fermement que l'illustration a le pouvoir de transcender les mots
                et de toucher les émotions de manière directe et puissante.
              </p>
              <p>
                Basé à Paris, je travaille avec des clients du monde entier,
                des startups innovantes aux grandes marques établies, en passant
                par des projets personnels qui nourrissent ma créativité.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 gap-4 pt-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 text-charcoal/80"
                  >
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <span className="font-medium">{achievement.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">
            Mes valeurs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-accent/20 to-soft-blue/20 rounded-2xl flex items-center justify-center mb-6"
                  >
                    <Icon size={32} className="text-accent" />
                  </motion.div>

                  <h3 className="font-display text-2xl font-bold text-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">
            Compétences
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-charcoal">{skill.name}</span>
                  <span className="text-accent font-bold">{skill.level}%</span>
                </div>

                <div className="h-3 bg-charcoal/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent to-soft-blue rounded-full"
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-charcoal to-charcoal/90 rounded-3xl p-12 md:p-16 text-center text-cream shadow-2xl"
        >
          <motion.h2
            className="font-display text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Travaillons ensemble
          </motion.h2>

          <motion.p
            className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Vous avez un projet en tête ? Je serais ravi de donner vie à vos idées
            à travers mes illustrations.
          </motion.p>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-accent text-cream rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            Contactez-moi
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
