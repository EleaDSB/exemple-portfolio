import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { illustrations, categories, heightConfig } from '../data/illustrations';
import PageTransition from '../components/PageTransition';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredIllustrations = selectedCategory === "Tous"
    ? illustrations
    : illustrations.filter(item => item.category === selectedCategory);

  const getHeight = (height) => {
    return heightConfig[height] || heightConfig.default;
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-charcoal mb-6">
              Galerie
            </h1>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Découvrez une sélection de mes créations, où l'imagination rencontre le savoir-faire
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12 overflow-x-auto pb-4">
            <div className="flex gap-3 justify-center flex-wrap">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-charcoal text-cream shadow-lg'
                      : 'bg-charcoal/5 text-charcoal hover:bg-charcoal/10'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredIllustrations.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="break-inside-avoid"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer group"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className={`${getHeight(item.height)} ${item.color} rounded-2xl overflow-hidden relative shadow-lg`}>
                      {/* Hover overlay with zoom icon */}
                      <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <div className="absolute top-4 right-4 bg-cream/20 backdrop-blur-sm rounded-full p-2">
                          <ZoomIn size={20} className="text-cream" />
                        </div>
                      </div>

                      {/* Image content */}
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center opacity-30">
                            <div className="text-4xl mb-2">🎨</div>
                            <div className="text-xs text-charcoal/60">{item.title}</div>
                          </div>
                        </div>
                      )}

                      {/* Always visible gradient overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 via-charcoal/50 to-transparent p-6 pt-12">
                        <h3 className="font-display text-xl md:text-2xl font-bold text-cream mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-cream/90">{item.category}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filteredIllustrations.length === 0 && (
            <div className="text-center py-20">
              <p className="text-charcoal/40 text-lg">
                Aucune illustration dans cette catégorie
              </p>
            </div>
          )}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-charcoal/95 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                className="absolute top-6 right-6 p-3 bg-cream/10 hover:bg-cream/20 rounded-full text-cream transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </motion.button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`aspect-video ${selectedImage.image ? '' : selectedImage.color} rounded-2xl shadow-2xl flex items-center justify-center mb-6 overflow-hidden`}>
                  {selectedImage.image ? (
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎨</div>
                      <div className="text-charcoal/60">Image d'illustration</div>
                    </div>
                  )}
                </div>

                <div className="text-cream text-center">
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                    {selectedImage.title}
                  </h2>
                  <p className="text-cream/70">{selectedImage.category}</p>
                  {selectedImage.description && (
                    <p className="text-cream/60 mt-2 text-sm">{selectedImage.description}</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Gallery;
