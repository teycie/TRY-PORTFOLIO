# Trish Castillo's Portfolio Website

A professional, modern portfolio website for Trish Castillo, a BSIT student. Built with React.js, featuring smooth animations, a lilac color palette, and WCAG-compliant accessibility standards.

## 🎨 Features

- **Modern Design**: Sleek, professional interface with a lilac color palette (#C8A2C8)
- **Animations**: Smooth transitions and floating background effects using Framer Motion
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Accessibility**: WCAG-compliant buttons with visible focus states and proper ARIA labels
- **React Router**: Seamless navigation between pages
- **Component-Based Architecture**: Modular, reusable components
- **Styled Components**: CSS modules and styled-components for styling

## 📋 Pages & Sections

### 1. **Home**
- Greeting heading: "Hi, I'm Trish ʚïɞ"
- Subheading: "A BSIT student"
- Animated background with floating shapes
- Call-to-action buttons

### 2. **About Me**
- Personal introduction and bio
- Skills and expertise showcase
- Education information
- Animated skill cards

### 3. **Projects**
- Showcase of student projects
- Project cards with hover animations
- Technology tags for each project
- Links to GitHub repositories

### 4. **Contact**
- Contact form with validation
- Social media links (GitHub, Instagram, Twitter, Facebook)
- Contact information
- Success/error message handling

### 5. **Navigation**
- Sticky navigation bar
- Mobile hamburger menu
- Smooth link transitions

### 6. **Footer**
- Quick links
- Social media links
- Copyright information

## 🛠 Tech Stack

- **Frontend Framework**: React 18.2.0
- **Routing**: React Router DOM 6.20.0
- **Animations**: Framer Motion 10.16.0
- **Styling**: Styled Components 6.1.0 + CSS Modules
- **Build Tool**: React Scripts 5.0.1

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Navigate to project directory**
   ```bash
   cd trish-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm build
   ```

## 📁 Project Structure

```
trish-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   │   ├── Navigation.js
│   │   │   └── Navigation.css
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.js
│   │   │   └── ProjectCard.css
│   │   └── ContactForm/
│   │       ├── ContactForm.js
│   │       └── ContactForm.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   ├── Projects/
│   │   │   ├── Projects.js
│   │   │   └── Projects.css
│   │   └── Contact/
│   │       ├── Contact.js
│   │       └── Contact.css
│   ├── styles/
│   │   └── StyledComponents.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Color Palette

- **Primary Lilac**: #C8A2C8
- **Dark Lilac**: #a56ba5
- **Light Lilac**: #e8d5e8
- **Very Light Lilac**: #f5f0f6
- **Accent Purple**: #8b5fbf
- **Text Dark**: #2d2d2d
- **Text Light**: #666

## ♿ Accessibility Features

- **WCAG Compliance**: All buttons and interactive elements follow WCAG 2.1 AA standards
- **Focus States**: Visible 3px outlines on all interactive elements
- **Semantic HTML**: Proper use of semantic elements and ARIA labels
- **Color Contrast**: High contrast ratios for text and backgrounds
- **Keyboard Navigation**: Full keyboard support for all navigation and interactive elements
- **Screen Reader Support**: Proper labels and ARIA attributes for screen readers
- **Form Validation**: Clear error messages and validation feedback

## 🚀 Key Features Implementation

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Flexible grid layouts

### Animations
- Framer Motion for smooth transitions
- CSS keyframe animations for background effects
- Staggered animations for content appearance

### Forms
- React hooks for state management
- Email validation
- Success/error message handling
- Accessible form inputs with labels

### Navigation
- React Router for SPA navigation
- Active link styling
- Mobile hamburger menu
- Smooth scrolling

## 🔧 Customization

### Update Personal Information
Edit the following files to customize content:
- `src/pages/Home/Home.js` - Update heading and subheading
- `src/pages/About/About.js` - Update bio and skills
- `src/pages/Projects/Projects.js` - Add your projects
- `src/pages/Contact/Contact.js` - Update contact information
- `src/components/ContactForm/ContactForm.js` - Add form submission logic

### Customize Colors
Edit `src/index.css` and update the CSS variables in the `:root` selector:
```css
:root {
  --primary-lilac: #C8A2C8;
  --dark-lilac: #a56ba5;
  /* ... other colors ... */
}
```

### Add Projects
Update the `projects` array in `src/pages/Projects/Projects.js`:
```javascript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    link: 'https://github.com/...',
    image: 'image-url'
  },
  // ... more projects
];
```

## 📱 Mobile Responsiveness

The website is fully responsive with optimized layouts for:
- **Mobile devices** (320px - 480px)
- **Tablets** (481px - 768px)
- **Desktops** (769px and above)

## 📞 Contact & Social Links

Update the contact information and social links in:
- `src/pages/Contact/Contact.js`
- `src/components/Footer/Footer.js`

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, feel free to reach out through the contact form.

## 📄 License

This project is open source and available under the MIT License.

## ✨ Future Enhancements

- Backend integration for form submissions
- Blog section with markdown support
- Dark mode toggle
- Multi-language support
- Analytics integration
- Testimonials section
- Resume/CV download

---

**Created with ❤️ by Trish Castillo | 2025**
