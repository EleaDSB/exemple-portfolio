// Données des illustrations du portfolio
// Vous pouvez facilement ajouter, modifier ou supprimer des illustrations ici

// Helper pour construire les chemins d'images avec le base URL
const getImagePath = (imagePath) => `${import.meta.env.BASE_URL}${imagePath}`;

export const illustrations = [
  {
    id: 1,
    title: "Portrait Imaginaire",
    category: "Portrait",
    description: "Un portrait expressif mêlant réalisme et imagination",
    color: "bg-gradient-to-br from-purple-200 to-pink-200",
    height: "tall",
    image: getImagePath("images/gallery/portraitimaginaire.png"),
    tags: ["portrait", "digital", "fantaisie"]
  },
  {
    id: 2,
    title: "Paysage Urbain",
    category: "Paysage",
    description: "Vue panoramique d'une ville moderne au coucher du soleil",
    color: "bg-gradient-to-br from-blue-200 to-cyan-200",
    height: "short",
    // image: "/path/to/image.jpg",
    tags: ["paysage", "urbain", "architecture"]
  },
  {
    id: 3,
    title: "Nature Abstraite",
    category: "Abstrait",
    description: "Interprétation abstraite des formes organiques de la nature",
    color: "bg-gradient-to-br from-green-200 to-emerald-200",
    height: "medium",
    // image: "/path/to/image.jpg",
    tags: ["abstrait", "nature", "organique"]
  },
  {
    id: 4,
    title: "Créature Fantastique",
    category: "Fantasy",
    description: "Design de créature mythique pour univers fantastique",
    color: "bg-gradient-to-br from-orange-200 to-red-200",
    height: "tall",
    // image: "/path/to/image.jpg",
    tags: ["fantasy", "créature", "mythologie"]
  },
  {
    id: 5,
    title: "Scène Quotidienne",
    category: "Lifestyle",
    description: "Illustration d'un moment de vie du quotidien",
    color: "bg-gradient-to-br from-yellow-200 to-amber-200",
    height: "medium",
    image: getImagePath("images/gallery/scenequotidienne.jpg"),
    tags: ["lifestyle", "quotidien", "scène"]
  },
  {
    id: 6,
    title: "Composition Florale",
    category: "Nature",
    description: "Arrangement artistique de fleurs et plantes",
    color: "bg-gradient-to-br from-rose-200 to-pink-200",
    height: "short",
    // image: "/path/to/image.jpg",
    tags: ["nature", "floral", "botanique"]
  },
  {
    id: 7,
    title: "Architecture Moderne",
    category: "Architecture",
    description: "Étude architecturale de bâtiments contemporains",
    color: "bg-gradient-to-br from-slate-200 to-gray-200",
    height: "tall",
    // image: "/path/to/image.jpg",
    tags: ["architecture", "moderne", "géométrie"]
  },
  {
    id: 8,
    title: "Personnage Stylisé",
    category: "Character Design",
    description: "Design de personnage original avec style unique",
    color: "bg-gradient-to-br from-indigo-200 to-purple-200",
    height: "medium",
    // image: "/path/to/image.jpg",
    tags: ["character", "design", "personnage"]
  },
  {
    id: 9,
    title: "Paysage Montagneux",
    category: "Paysage",
    description: "Vue majestueuse de montagnes enneigées",
    color: "bg-gradient-to-br from-sky-200 to-blue-200",
    height: "short",
    image: getImagePath("images/gallery/montagne.png"),
    tags: ["paysage", "montagne", "nature"]
  },
  {
    id: 10,
    title: "Portrait Expressif",
    category: "Portrait",
    description: "Portrait capturant une émotion intense",
    color: "bg-gradient-to-br from-red-200 to-orange-200",
    height: "tall",
    // image: "/path/to/image.jpg",
    tags: ["portrait", "émotion", "expressif"]
  },
  {
    id: 11,
    title: "Dragon Légendaire",
    category: "Fantasy",
    description: "Illustration épique d'un dragon ancien",
    color: "bg-gradient-to-br from-amber-200 to-yellow-200",
    height: "tall",
    // image: "/path/to/image.jpg",
    tags: ["fantasy", "dragon", "épique"]
  },
  {
    id: 12,
    title: "Formes Géométriques",
    category: "Abstrait",
    description: "Composition de formes et couleurs abstraites",
    color: "bg-gradient-to-br from-violet-200 to-fuchsia-200",
    height: "medium",
    // image: "/path/to/image.jpg",
    tags: ["abstrait", "géométrie", "couleurs"]
  }
];

// Catégories disponibles pour le filtre
export const categories = [
  "Tous",
  "Portrait",
  "Paysage",
  "Abstrait",
  "Fantasy",
  "Nature",
  "Architecture",
  "Character Design",
  "Lifestyle"
];

// Configuration des hauteurs pour la grille masonry
export const heightConfig = {
  tall: 'h-80 md:h-96',
  medium: 'h-64 md:h-80',
  short: 'h-48 md:h-64',
  default: 'h-64'
};
