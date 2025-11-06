import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Palette, User, Mail, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/gallery', label: 'Galerie', icon: Palette },
    { path: '/about', label: 'À propos', icon: User },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navigation Button - Always visible */}
      <motion.button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-3 bg-charcoal text-cream rounded-full shadow-lg"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Menu"
      >
        <motion.div
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <motion.path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                animate={isOpen ? { pathLength: 0 } : { pathLength: 1 }}
              />
            </svg>
          )}
        </motion.div>
      </motion.button>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 48px) 48px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 48px) 48px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 48px) 48px)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-charcoal"
          >
            <div className="flex items-center justify-center min-h-screen p-6">
              <nav className="w-full max-w-lg">
                <motion.ul
                  className="space-y-6"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                    }
                  }}
                >
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                      <motion.li
                        key={item.path}
                        variants={{
                          closed: { opacity: 0, y: 20 },
                          open: { opacity: 1, y: 0 }
                        }}
                      >
                        <Link
                          to={item.path}
                          onClick={toggleMenu}
                          className={`flex items-center gap-6 text-4xl md:text-6xl font-display transition-colors group ${
                            isActive ? 'text-accent' : 'text-cream hover:text-soft-blue'
                          }`}
                        >
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            className="flex-shrink-0"
                          >
                            <Icon size={32} className="md:w-12 md:h-12" />
                          </motion.div>
                          <span className="relative">
                            {item.label}
                            <motion.span
                              className="absolute -bottom-2 left-0 h-1 bg-accent"
                              initial={{ width: 0 }}
                              whileHover={{ width: '100%' }}
                              transition={{ duration: 0.3 }}
                            />
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>

                {/* Decorative elements */}
                <motion.div
                  className="mt-16 space-y-4 text-cream/40 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="font-display italic">
                    "Chaque trait raconte une histoire"
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      className="hover:text-accent transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      Instagram
                    </motion.a>
                    <span>•</span>
                    <motion.a
                      href="#"
                      className="hover:text-accent transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      Behance
                    </motion.a>
                    <span>•</span>
                    <motion.a
                      href="#"
                      className="hover:text-accent transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      Dribbble
                    </motion.a>
                  </div>
                </motion.div>
              </nav>
            </div>

            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ delay: 0.3 }}
            >
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
