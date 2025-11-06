# Gestion des Données du Portfolio

Ce dossier contient toutes les données configurables de votre portfolio. Vous pouvez facilement personnaliser votre site en modifiant ces fichiers.

## 📁 Structure des Fichiers

### `illustrations.js`
Contient toutes les données relatives à vos illustrations et projets.

**Comment ajouter une nouvelle illustration :**
```javascript
{
  id: 13, // ID unique
  title: "Titre de l'illustration",
  category: "Catégorie", // Doit correspondre à une catégorie existante
  description: "Description de l'œuvre",
  color: "bg-gradient-to-br from-color-200 to-color-200", // Couleur de fond
  height: "tall", // Options: tall, medium, short
  image: "/path/to/image.jpg", // Chemin de votre image
  tags: ["tag1", "tag2", "tag3"] // Tags pour recherche/filtrage
}
```

**Catégories disponibles :**
- Tous
- Portrait
- Paysage
- Abstrait
- Fantasy
- Nature
- Architecture
- Character Design
- Lifestyle

Pour ajouter une nouvelle catégorie, ajoutez-la dans l'array `categories`.

### `profile.js`
Contient toutes vos informations personnelles et professionnelles.

**Sections à personnaliser :**

1. **profileInfo** : Nom, titre, bio, localisation
2. **stats** : Statistiques affichées sur la page d'accueil
3. **skills** : Compétences avec niveaux (0-100)
4. **values** : Vos valeurs professionnelles
5. **achievements** : Réalisations marquantes
6. **contactInfo** : Email, téléphone, localisation
7. **socialLinks** : Liens vers vos réseaux sociaux
8. **heroWords** : Mots animés sur la page d'accueil

## 🎨 Guide de Personnalisation

### 1. Ajouter vos propres illustrations

1. Placez vos images dans le dossier `public/images/gallery/`
2. Dans `illustrations.js`, mettez à jour le champ `image` :
   ```javascript
   image: "/images/gallery/mon-illustration.jpg"
   ```

### 2. Modifier vos informations personnelles

Éditez `profile.js` et remplacez :
- Nom et titre
- Biographie
- Email et téléphone
- Liens vers réseaux sociaux

### 3. Ajuster les couleurs des placeholders

Les couleurs utilisent les classes Tailwind CSS. Exemples :
```javascript
// Tons de bleu
color: "bg-gradient-to-br from-blue-200 to-cyan-200"

// Tons de rouge
color: "bg-gradient-to-br from-red-200 to-orange-200"

// Tons de vert
color: "bg-gradient-to-br from-green-200 to-emerald-200"
```

### 4. Ajouter de nouvelles compétences

Dans `profile.js`, ajoutez dans l'array `skills` :
```javascript
{ name: "Nouvelle Compétence", level: 85 }
```

## 🔄 Mise à jour en direct

Lorsque vous modifiez ces fichiers, le serveur de développement recharge automatiquement la page avec vos changements.

## 💡 Conseils

- Gardez des IDs uniques pour chaque illustration
- Optimisez vos images avant de les ajouter (format WebP recommandé)
- Utilisez des descriptions claires et engageantes
- Mettez régulièrement à jour votre portfolio avec de nouveaux projets
- Testez sur mobile après chaque modification importante

## 🚀 Prochaines étapes

1. Remplacez tous les placeholders par vos vraies données
2. Ajoutez vos images dans le dossier public
3. Testez le site sur différents appareils
4. Déployez votre portfolio !
