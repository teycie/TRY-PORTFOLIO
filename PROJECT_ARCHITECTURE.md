# Project Architecture & Structure

## Directory Tree

```
trish-portfolio/
│
├── 📄 Configuration Files
│   ├── package.json                 (Dependencies, scripts, metadata)
│   ├── .gitignore                   (Git ignore rules)
│   ├── .env.example                 (Environment variables template)
│   ├── README.md                    (Quick start guide)
│   ├── DOCUMENTATION.md             (Complete documentation)
│   └── SETUP_COMPLETE.md            (Setup summary)
│
├── 📁 public/
│   └── index.html                   (HTML template for React)
│
└── 📁 src/
    │
    ├── 📁 components/               (Reusable UI Components)
    │   ├── 📁 Navigation/
    │   │   ├── Navigation.js         (Navigation bar with routing)
    │   │   └── Navigation.css        (Navigation styles)
    │   │
    │   ├── 📁 Footer/
    │   │   ├── Footer.js            (Footer with social links)
    │   │   └── Footer.css           (Footer styles)
    │   │
    │   ├── 📁 ProjectCard/
    │   │   ├── ProjectCard.js       (Individual project card)
    │   │   └── ProjectCard.css      (Card styles & animations)
    │   │
    │   └── 📁 ContactForm/
    │       ├── ContactForm.js       (Contact form with validation)
    │       └── ContactForm.css      (Form styles)
    │
    ├── 📁 pages/                    (Page Components)
    │   ├── 📁 Home/
    │   │   ├── Home.js              (Hero section, CTA buttons)
    │   │   └── Home.css             (Animations, gradients)
    │   │
    │   ├── 📁 About/
    │   │   ├── About.js             (Bio, skills, education)
    │   │   └── About.css            (About page styles)
    │   │
    │   ├── 📁 Projects/
    │   │   ├── Projects.js          (Project grid, cards)
    │   │   └── Projects.css         (Grid layout, animations)
    │   │
    │   └── 📁 Contact/
    │       ├── Contact.js           (Contact form, social links)
    │       └── Contact.css          (Contact page styles)
    │
    ├── 📁 styles/
    │   └── StyledComponents.js      (Reusable styled components)
    │
    ├── App.js                       (Main app with Router setup)
    ├── App.css                      (Global app styles)
    ├── index.js                     (React entry point)
    └── index.css                    (Global CSS variables)
```

---

## Component Hierarchy

```
App
├── Navigation
└── <Routes>
    ├── Home
    │   └── [Animated Background]
    │   └── [Hero Content]
    │   └── [CTA Buttons]
    │
    ├── About
    │   └── [Bio Text]
    │   └── [Skills Grid]
    │       └── [Skill Cards] ×8
    │   └── [Education Section]
    │
    ├── Projects
    │   └── [Projects Grid]
    │       └── ProjectCard ×6
    │           ├── [Image with Overlay]
    │           ├── [Title & Description]
    │           └── [Technology Tags]
    │
    └── Contact
        ├── [Contact Form]
        │   └── ContactForm
        │       ├── [Name Input]
        │       ├── [Email Input]
        │       ├── [Subject Input]
        │       ├── [Message Textarea]
        │       └── [Submit Button]
        │
        └── [Contact Info Section]
            ├── [Social Links Grid]
            │   └── [Social Link Card] ×4
            └── [Contact Details]
                ├── Email
                ├── Phone
                └── Location
└── Footer
    ├── [Site Info]
    ├── [Quick Links]
    ├── [Social Links]
    └── [Copyright]
```

---

## Data Flow

```
┌─────────────────────────────────────────┐
│         App Component                   │
│   ┌──────────────────────────────────┐  │
│   │  Router Setup (React Router v6) │  │
│   └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
          │
    ┌─────┴──────────────────────────┐
    │                                │
    ▼                                ▼
┌──────────────┐            ┌──────────────────┐
│ Navigation   │            │  Page Components │
│              │            │                  │
│ - Links      │            │ - Home.js        │
│ - Hamburger  │            │ - About.js       │
│ - Mobile     │            │ - Projects.js    │
│   Menu       │            │ - Contact.js     │
└──────────────┘            └──────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
            ┌──────────────┐  ┌──────────────┐ ┌────────────────┐
            │ Components   │  │   State      │ │ Styled Comps   │
            │              │  │ Management   │ │                │
            │ - ProjectCard│  │              │ │ - Button       │
            │ - ContactForm│  │ - Form Data  │ │ - Container    │
            │              │  │ - Animations │ │ - Grid         │
            └──────────────┘  └──────────────┘ └────────────────┘
                    │
                    ▼
            ┌──────────────┐
            │  Styling     │
            │              │
            │ - CSS Modules│
            │ - Animations │
            │ - Responsive │
            └──────────────┘
```

---

## State Management Flow

```
ContactForm Component
├── State: formData
│   ├── name
│   ├── email
│   ├── subject
│   └── message
│
├── State: submitted (boolean)
│
├── State: error (string)
│
└── Handlers
    ├── handleChange() - Update form fields
    ├── validateEmail() - Email validation
    └── handleSubmit() - Form submission
```

---

## Styling Architecture

```
Global Styles (index.css)
├── CSS Variables (:root)
│   ├── Colors (lilac palette)
│   ├── Shadows
│   └── Spacing
│
├── Reset Styles
│   ├── * { margin: 0, padding: 0 }
│   └── html, body setup
│
└── Base Styles
    ├── Typography
    ├── Focus states
    └── Animations (@keyframes)

Component-Level Styles
├── CSS Modules (.css files)
│   └── Scoped to components
│
└── Styled Components
    ├── Reusable styled components
    └── Dynamic props support

Responsive Design
├── Mobile (320px - 480px)
├── Tablet (481px - 768px)
└── Desktop (769px+)
```

---

## Routing Structure

```
App (Router)
│
├── Route: / → Home Page
│   └── Path: "/"
│
├── Route: /about → About Page
│   └── Path: "/about"
│
├── Route: /projects → Projects Page
│   └── Path: "/projects"
│
└── Route: /contact → Contact Page
    └── Path: "/contact"
```

---

## Animation Pipeline

```
Framer Motion Setup

containerVariants
├── hidden: { opacity: 0 }
└── visible: { opacity: 1, staggerChildren: 0.2 }

itemVariants
├── hidden: { opacity: 0, y: 20 }
└── visible: { opacity: 1, y: 0, transition: {...} }

Scroll Animations
├── whileInView: Trigger on scroll
├── viewport: Margin for early trigger
└── once: true - Only animate once

Hover Animations
├── whileHover: Scale effects
└── whileTap: Active states
```

---

## CSS Variable System

```
Color Variables
├── Primary: --primary-lilac (#C8A2C8)
├── Dark: --dark-lilac (#a56ba5)
├── Light: --light-lilac (#e8d5e8)
├── Very Light: --very-light-lilac (#f5f0f6)
├── Accent: --accent-purple (#8b5fbf)
├── Text Dark: --text-dark (#2d2d2d)
├── Text Light: --text-light (#666)
└── White: --white (#ffffff)

Effect Variables
├── Shadow Small: --shadow-sm
├── Shadow Medium: --shadow-md
└── Shadow Large: --shadow-lg
```

---

## Accessibility Layer

```
WCAG 2.1 AA Compliance

Keyboard Navigation
├── Tab order: Logical flow
├── Enter: Activate buttons
├── Arrow keys: Menu navigation
└── Escape: Close modals/menus

Focus Management
├── outline: 3px solid --accent-purple
├── outline-offset: 2px
└── Visible on all interactive elements

Semantic HTML
├── <nav> for navigation
├── <main> for page content
├── <footer> for footer
├── <section> for sections
├── <button> for buttons
└── <label> for form inputs

ARIA Attributes
├── aria-label: Button descriptions
├── aria-required: Form requirements
├── aria-live: Dynamic content
├── role: Element roles
└── aria-labelledby: Relationships
```

---

## Performance Considerations

```
Optimization Techniques

Code Splitting
├── React Router lazy loading
└── Dynamic component imports

Asset Optimization
├── Image placeholders (via URL)
├── CSS modules reduce bundle
└── Tree shaking (unused code removal)

Memory Management
├── State cleanup
├── Event listener cleanup
└── Component unmounting

Bundle Analysis
└── Future: webpack-bundle-analyzer
```

---

## File Statistics

```
Total Files: 34+
├── Configuration Files: 6
├── Public Files: 1
├── Source Files: 1 (App.js)
├── CSS Files: 10
├── Component JS Files: 8
├── Page JS Files: 4
├── Styled Components: 1
├── Root CSS: 1
├── Root JS: 1
└── Documentation: 3
```

---

## Dependency Tree

```
Project Dependencies
│
├── react@18.2.0
│   └── React core library
│
├── react-dom@18.2.0
│   └── React DOM rendering
│
├── react-router-dom@6.20.0
│   ├── BrowserRouter
│   ├── Routes
│   ├── Route
│   ├── Link
│   └── Navigation
│
├── framer-motion@10.16.0
│   ├── motion (components)
│   ├── variants (animations)
│   └── whileHover, whileInView, etc.
│
└── styled-components@6.1.0
    ├── styled (function)
    └── Theme support
```

---

## Build Output Structure

```
build/ (After npm run build)
├── index.html
├── static/
│   ├── js/
│   │   ├── main.[hash].js
│   │   ├── [number].[hash].js
│   │   └── runtime~main.[hash].js
│   ├── css/
│   │   └── main.[hash].css
│   └── media/
│       └── [images]
└── manifest.json
```

---

**Architecture Version**: 1.0.0  
**Last Updated**: January 21, 2025
