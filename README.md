# Portfolio Illustrateur

Une application portfolio moderne et originale pour illustrateur, développée avec React, Tailwind CSS et Framer Motion.

## ✨ Caractéristiques

- **Design Original** : Interface créative avec des animations fluides et des interactions engageantes
- **Mobile First** : Entièrement responsive, optimisé pour mobile en priorité
- **Animations Avancées** : Utilisation de Framer Motion pour des transitions et animations sophistiquées
- **Navigation Immersive** : Menu plein écran avec animation de cercle expansif
- **Galerie Dynamique** : Système de grille en masonry avec filtres par catégorie
- **Formulaire de Contact** : Interface intuitive avec validation et retour visuel
- **Performance Optimisée** : Build avec Vite pour des temps de chargement rapides

## 🛠 Technologies Utilisées

- **React 18** - Bibliothèque UI
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations et transitions
- **React Router DOM** - Navigation SPA
- **Lucide React** - Icônes modernes

## 🚀 Installation

```bash
# Cloner le projet
cd illustrator-portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173/`

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Layout.jsx          # Layout principal avec navigation
│   └── Navigation.jsx      # Menu hamburger animé
├── pages/
│   ├── Home.jsx           # Page d'accueil avec hero section
│   ├── Gallery.jsx        # Galerie d'illustrations
│   ├── About.jsx          # Page à propos
│   └── Contact.jsx        # Formulaire de contact
├── data/
│   ├── illustrations.js   # Données des projets/illustrations
│   ├── profile.js         # Informations personnelles et compétences
│   ├── index.js          # Point d'entrée pour les imports
│   └── README.md         # Guide de gestion des données
├── assets/                # Images et ressources
├── hooks/                 # Hooks React personnalisés
├── App.jsx               # Configuration du routeur
└── index.css             # Styles globaux et configuration Tailwind

public/
└── images/
    └── gallery/           # Ajoutez vos images ici
```

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.js` :

```javascript
colors: {
  'cream': '#FFF8F0',      // Fond principal
  'charcoal': '#2D2D2D',   // Texte principal
  'accent': '#FF6B6B',     // Accent rouge
  'soft-blue': '#4ECDC4',  // Accent bleu
}
```

### Polices

Les polices Google Fonts sont importées dans `src/index.css` :
- **Playfair Display** - Titres et éléments display
- **Inter** - Corps de texte

## 📱 Fonctionnalités par Page

### Accueil
- Animation de fond avec orbes réactifs au curseur
- Rotation de mots-clés animés
- Statistiques animées au scroll
- Call-to-actions vers la galerie et le contact

### Galerie
- Grille en masonry responsive
- Filtres par catégorie avec animations
- Effet parallaxe au scroll
- Modal lightbox pour visualisation agrandie
- Hover effects sophistiqués

### À Propos
- Section bio avec photo animée
- Cartes de valeurs avec icônes
- Barres de progression pour les compétences
- CTA de conversion en fin de page

### Contact
- Formulaire avec validation
- Animations au focus des champs
- Informations de contact cliquables
- Message de confirmation animé
- Liens vers réseaux sociaux

## 📝 Gestion des Données

Toutes les données du portfolio sont centralisées dans le dossier `src/data/` pour faciliter la personnalisation.

### Fichiers de données

**`src/data/illustrations.js`**
- Liste de toutes vos illustrations/projets
- Catégories et filtres
- Configuration des hauteurs pour la grille

**`src/data/profile.js`**
- Informations personnelles (nom, bio, localisation)
- Statistiques de la page d'accueil
- Compétences et niveaux
- Valeurs professionnelles
- Informations de contact
- Liens vers réseaux sociaux

### Comment personnaliser

1. **Ajouter une illustration :**
```javascript
// Dans src/data/illustrations.js
{
  id: 13,
  title: "Titre de votre illustration",
  category: "Fantasy",
  description: "Description de l'œuvre",
  color: "bg-gradient-to-br from-purple-200 to-pink-200",
  height: "tall",
  image: "/images/gallery/mon-image.jpg",
  tags: ["tag1", "tag2"]
}
```

2. **Modifier vos informations :**
```javascript
// Dans src/data/profile.js
export const profileInfo = {
  name: "Votre Nom",
  title: "Votre Titre",
  // ...
};
```

3. **Ajouter vos images :**
- Placez vos fichiers dans `public/images/gallery/`
- Référencez-les dans `illustrations.js` avec le chemin `/images/gallery/nom-fichier.jpg`

Pour plus de détails, consultez `src/data/README.md`

## 🚀 Build pour Production

```bash
# Créer un build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

## 💡 Suggestions d'Amélioration

Pour adapter ce portfolio à vos besoins :

1. **Remplacer les placeholders** : Ajoutez vos vraies illustrations dans la galerie
2. **Personnaliser le contenu** : Modifiez les textes, statistiques et informations de contact
3. **Ajouter un backend** : Intégrez un service comme EmailJS ou un backend custom pour le formulaire
4. **Optimiser les images** : Utilisez des formats modernes (WebP, AVIF) et du lazy loading
5. **Ajouter des analytics** : Intégrez Google Analytics ou Plausible
6. **SEO** : Ajoutez des meta tags et un sitemap
7. **Accessibilité** : Testez avec un lecteur d'écran et améliorez l'a11y

## 📄 Licence

Ce projet est libre d'utilisation pour vos projets personnels et professionnels.

---

Créé avec ❤️ et React
# exemple-portfolio
