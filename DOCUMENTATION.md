# Trish Castillo's Portfolio - Complete Documentation

## 📚 Table of Contents
1. [Project Overview](#project-overview)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Components Documentation](#components-documentation)
5. [Styling & Design](#styling--design)
6. [Accessibility](#accessibility)
7. [Customization Guide](#customization-guide)
8. [Deployment](#deployment)
9. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

This is a professional portfolio website for Trish Castillo, a BSIT (Bachelor of Science in Information Technology) student. The website showcases her skills, projects, and provides contact information to potential employers and collaborators.

### Key Technologies
- **React 18**: Modern JavaScript library for building user interfaces
- **React Router v6**: Client-side routing for smooth page transitions
- **Framer Motion**: Animation library for smooth transitions and effects
- **Styled Components**: CSS-in-JS solution for component styling
- **CSS Modules**: Modular CSS for better organization

### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Installation

### System Requirements
- Node.js v14.0.0 or higher
- npm v6.0.0 or yarn v1.22.0 or higher
- 500MB free disk space

### Quick Start

```bash
# 1. Navigate to project directory
cd c:\Users\USER\Videos\TRYY

# 2. Install all dependencies
npm install

# 3. Start development server
npm start

# 4. Open browser to http://localhost:3000
```

### Available Scripts

```bash
# Start development server (with hot reload)
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (one-way operation)
npm run eject
```

---

## 📁 Project Structure

### Detailed Directory Layout

```
trish-portfolio/
│
├── public/
│   └── index.html                 # HTML template for React app
│
├── src/
│   ├── components/                # Reusable components
│   │   ├── Navigation/
│   │   │   ├── Navigation.js       # Top navigation bar component
│   │   │   └── Navigation.css      # Navigation styling
│   │   ├── Footer/
│   │   │   ├── Footer.js          # Footer component with links
│   │   │   └── Footer.css         # Footer styling
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.js     # Individual project card component
│   │   │   └── ProjectCard.css    # Project card styling
│   │   └── ContactForm/
│   │       ├── ContactForm.js     # Contact form with validation
│   │       └── ContactForm.css    # Form styling
│   │
│   ├── pages/                     # Page components
│   │   ├── Home/
│   │   │   ├── Home.js            # Home page with hero section
│   │   │   └── Home.css           # Home page styling
│   │   ├── About/
│   │   │   ├── About.js           # About me page
│   │   │   └── About.css          # About page styling
│   │   ├── Projects/
│   │   │   ├── Projects.js        # Projects showcase page
│   │   │   └── Projects.css       # Projects page styling
│   │   └── Contact/
│   │       ├── Contact.js         # Contact page
│   │       └── Contact.css        # Contact page styling
│   │
│   ├── styles/
│   │   └── StyledComponents.js    # Shared styled components
│   │
│   ├── App.js                     # Main App component with routing
│   ├── App.css                    # Global app styling
│   ├── index.js                   # React app entry point
│   └── index.css                  # Global CSS variables and styles
│
├── package.json                   # Project dependencies and scripts
├── .gitignore                     # Git ignore rules
├── .env.example                   # Environment variables template
├── README.md                      # Quick start guide
└── DOCUMENTATION.md              # This file

```

---

## 🧩 Components Documentation

### 1. Navigation Component (`components/Navigation/Navigation.js`)

**Purpose**: Provides site-wide navigation with links to all pages.

**Props**: None

**Features**:
- Sticky positioning at top of page
- Mobile hamburger menu
- Active link highlighting
- WCAG-compliant keyboard navigation
- Smooth animations on hover

**Usage**:
```jsx
<Navigation />
```

---

### 2. Footer Component (`components/Footer/Footer.js`)

**Purpose**: Displays footer with links and social media information.

**Props**: None

**Features**:
- Social media links (GitHub, Instagram, Twitter, Facebook)
- Quick navigation links
- Copyright information
- WCAG-compliant links

**Usage**:
```jsx
<Footer />
```

---

### 3. ProjectCard Component (`components/ProjectCard/ProjectCard.js`)

**Purpose**: Displays individual project information with hover effects.

**Props**:
```javascript
{
  project: {
    id: number,
    title: string,
    description: string,
    technologies: array,
    link: string,
    image: string
  }
}
```

**Features**:
- Hover animation effects
- Technology tags display
- Link to project/repository
- Image with overlay

**Usage**:
```jsx
<ProjectCard project={projectObject} />
```

---

### 4. ContactForm Component (`components/ContactForm/ContactForm.js`)

**Purpose**: Provides contact form with validation and submission handling.

**Props**: None

**Features**:
- Form validation (required fields, email format)
- Error message display
- Success message display
- WCAG-compliant form inputs
- Accessible error handling with ARIA live regions

**Fields**:
- Name (required)
- Email (required, validated)
- Subject (required)
- Message (required)

**Usage**:
```jsx
<ContactForm />
```

---

## 🎨 Styling & Design

### Color Palette

The portfolio uses a lilac-based color scheme for a modern, professional look:

```css
--primary-lilac: #C8A2C8       /* Main brand color */
--dark-lilac: #a56ba5         /* Hover states */
--light-lilac: #e8d5e8        /* Light accents */
--very-light-lilac: #f5f0f6   /* Backgrounds */
--accent-purple: #8b5fbf      /* Focus states, accents */
--text-dark: #2d2d2d          /* Main text */
--text-light: #666            /* Secondary text */
--white: #ffffff              /* White backgrounds */
```

### CSS Architecture

- **Global Styles**: `index.css` - Global variables and base styles
- **Component Styles**: Individual `.css` files per component
- **Styled Components**: `styles/StyledComponents.js` - Reusable styled components
- **Responsive Design**: Mobile-first approach with breakpoints at 480px, 768px

### Responsive Breakpoints

```css
Mobile:   320px - 480px
Tablet:   481px - 768px
Desktop:  769px and above
```

---

## ♿ Accessibility (WCAG 2.1 AA Compliance)

### Features Implemented

1. **Keyboard Navigation**
   - All interactive elements are keyboard accessible
   - Logical tab order maintained
   - Focus management for modals and forms

2. **Visual Indicators**
   - 3px outline for focus states
   - High contrast ratios (7:1 minimum for text)
   - Color not sole means of conveying information

3. **Semantic HTML**
   - Proper use of heading hierarchy
   - Semantic elements (nav, main, footer, section)
   - ARIA labels where necessary

4. **Form Accessibility**
   - Associated labels for all inputs
   - Error messages linked to form fields
   - Required fields marked with aria-required

5. **Screen Reader Support**
   - Descriptive link text
   - ARIA live regions for dynamic content
   - Proper heading structure
   - Image alt text (for project images)

### Testing Accessibility

To test accessibility:

1. **Keyboard Only**: Navigate entire site using only Tab, Enter, and Arrow keys
2. **Screen Reader**: Use browser's built-in accessibility tools
3. **Color Contrast**: Use WCAG contrast checker tools
4. **Automated Testing**: Use axe DevTools browser extension

### Common Accessibility Patterns Used

```jsx
// Proper form structure
<label htmlFor="email">Email *</label>
<input id="email" type="email" required aria-required="true" />

// Accessible button
<button aria-label="Send message">Send</button>

// Skip link (not visible in this version)
<a href="#main" className="sr-only">Skip to main content</a>

// Screen reader only class
<span className="sr-only">Loading...</span>

// ARIA live region
<div role="status" aria-live="polite">{message}</div>
```

---

## 🎭 Customization Guide

### 1. Personal Information

**Home Page** (`src/pages/Home/Home.js`):
```jsx
<motion.h1 className="home-heading">
  Hi, I'm <span>Trish</span>  // Change name here
</motion.h1>

<motion.p className="home-subheading">
  A BSIT Student  // Change title here
</motion.p>
```

**About Page** (`src/pages/About/About.js`):
```jsx
<p className="about-intro">
  I'm <strong>Trish Castillo</strong>, a third-year BSIT student...
  // Update bio here
</p>
```

### 2. Skills List

Edit the skills array in `src/pages/About/About.js`:
```javascript
const skills = [
  'HTML & CSS',
  'JavaScript',
  'React.js',
  'Python',
  // Add your skills here
];
```

### 3. Projects

Edit the projects array in `src/pages/Projects/Projects.js`:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description here',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    link: 'https://github.com/your-username/project',
    image: 'https://your-image-url.jpg',
  },
  // Add more projects...
];
```

### 4. Contact Information

**Contact Page** (`src/pages/Contact/Contact.js`):
```jsx
<p>
  <strong>Email:</strong>{' '}
  <a href="mailto:your-email@example.com">your-email@example.com</a>
</p>
```

**Footer** (`src/components/Footer/Footer.js`):
Update social media links and contact information.

### 5. Colors

Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-lilac: #C8A2C8;
  --dark-lilac: #a56ba5;
  --accent-purple: #8b5fbf;
  /* Customize colors here */
}
```

### 6. Fonts

Update font family in `src/index.css`:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### 7. Animations

Adjust animation timing in Framer Motion variants:
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,  // Delay between children
      delayChildren: 0.3,    // Initial delay
    },
  },
};
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Follow prompts and your site will be live
```

### Deploy to Netlify

```bash
# 1. Build the project
npm run build

# 2. Drag and drop the 'build' folder to Netlify Dashboard
# OR
# 3. Connect GitHub repository for automatic deployments
```

### Deploy to GitHub Pages

```bash
# 1. Add to package.json
"homepage": "https://yourusername.github.io/portfolio"

# 2. Install gh-pages
npm install --save-dev gh-pages

# 3. Add scripts to package.json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# 4. Deploy
npm run deploy
```

### Environment Variables for Production

Create `.env.production` file:
```
REACT_APP_API_URL=https://your-production-api.com
REACT_APP_CONTACT_EMAIL=your-email@example.com
```

---

## 🔧 Troubleshooting

### Issue: Port 3000 already in use
```bash
# Solution: Use different port
PORT=3001 npm start

# Or kill the process using port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue: Styles not loading
```bash
# Solution: Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### Issue: Images not showing
```bash
# Ensure images are in public folder or use correct URLs
# Or use placeholder services like:
https://via.placeholder.com/300x200/C8A2C8/ffffff?text=Image
```

### Issue: Form submissions not working
```jsx
// Update ContactForm.js to send data to backend
// Example using fetch:
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Issue: Mobile menu not closing
```javascript
// Ensure hamburger click handler is working:
const closeMenu = () => {
  setIsMenuOpen(false);
};
```

### Issue: Animations not smooth
```javascript
// Check if Framer Motion is installed
npm install framer-motion

// Verify animations are using proper variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
```

---

## 📊 Performance Optimization

### Current Optimizations
- Code splitting with React Router
- CSS modules for isolated styling
- Image optimization with placeholder service
- Lazy loading with React.lazy() (if extended)

### Further Optimization Tips
```javascript
// Lazy load components
const About = lazy(() => import('./pages/About/About'));

// Use memo for expensive components
const ProjectCard = memo(({ project }) => {...});

// Optimize images
// Use WebP format with fallbacks
// Implement progressive image loading
```

### Build Analysis
```bash
npm install -g source-map-explorer
npm run build
source-map-explorer 'build/static/js/*.js'
```

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [React Router Guide](https://reactrouter.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Styled Components](https://styled-components.com)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref)
- [MDN Web Docs](https://developer.mozilla.org)

---

## 🤝 Support & Feedback

For issues, suggestions, or improvements:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include browser and OS information
4. Provide steps to reproduce any bugs

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

**Last Updated**: January 21, 2025
**Version**: 1.0.0
