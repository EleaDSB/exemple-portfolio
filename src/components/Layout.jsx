import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Home Button - Hidden on home page */}
      {!isHomePage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-40"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white shadow-lg rounded-full text-charcoal hover:bg-charcoal hover:text-cream transition-colors duration-300 flex items-center gap-2"
              aria-label="Retour à l'accueil"
            >
              <Home size={24} />
            </motion.button>
          </Link>
        </motion.div>
      )}

      <main className="relative">
        {children}
      </main>

      {/* Signature watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 left-6 text-xs text-charcoal/30 font-display italic z-10 pointer-events-none"
      >
        © 2025 Portfolio
      </motion.div>
    </div>
  );
};

export default Layout;
