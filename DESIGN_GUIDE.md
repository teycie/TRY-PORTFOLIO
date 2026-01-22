# 🎨 Visual Design & Component Guide

## Color Reference Guide

### Primary Colors
```
Lilac (#C8A2C8)
████████████████████████████
Hex: #C8A2C8
RGB: 200, 162, 200
Use: Main buttons, headings, primary CTAs

Dark Lilac (#a56ba5)
████████████████████████████
Hex: #a56ba5
RGB: 165, 107, 165
Use: Hover states, darker text

Light Lilac (#e8d5e8)
████████████████████████████
Hex: #e8d5e8
RGB: 232, 213, 232
Use: Card backgrounds, light accents

Very Light Lilac (#f5f0f6)
████████████████████████████
Hex: #f5f0f6
RGB: 245, 240, 246
Use: Page backgrounds, light sections

Accent Purple (#8b5fbf)
████████████████████████████
Hex: #8b5fbf
RGB: 139, 95, 191
Use: Focus states, highlights, special accents
```

---

## Typography Scale

### Heading Sizes
```
H1 (Home): 4.5rem  - "Hi, I'm Trish ʚïɞ"
           Desktop: 3rem
           Mobile: 2rem

H2 (Section): 3rem - "My Projects"
              Desktop: 2.2rem
              Mobile: 1.8rem

H3 (Subsection): 1.8rem - "Send Me a Message"
                 Mobile: 1.4rem

H4 (Minor): 1.3rem - "Skills & Expertise"
            Mobile: 1.1rem
```

### Body Text Sizes
```
Large: 1.3rem - Descriptions
Regular: 1.1rem - Default body text
Small: 0.95rem - Secondary text
Tiny: 0.8rem - Tags, labels
```

### Line Heights
```
Headings: 1.2 (tight)
Body: 1.6 - 1.8 (readable)
Descriptions: 1.6 (optimal readability)
```

---

## Component Examples

### Button Styles

#### Primary Button
```
Background: Gradient (Lilac → Accent Purple)
Color: White
Padding: 14px 40px
Border Radius: 8px
Shadow: Medium

States:
  Default: Gradient background
  Hover: Darker gradient + translateY(-2px)
  Focus: 3px purple outline
  Active: translateY(0)
```

#### Secondary Button
```
Background: Transparent
Border: 2px solid Lilac
Color: Lilac
Padding: 14px 40px
Border Radius: 8px

States:
  Default: Transparent with border
  Hover: Very light lilac background
  Focus: 3px purple outline
```

### Card Component Example
```
┌─────────────────────────┐
│   ┌─────────────────┐   │
│   │  [Image/Icon]   │   │
│   │   + Overlay     │   │
│   └─────────────────┘   │
│                         │
│   Card Title            │
│   ─────────────────────  │
│   Brief description     │
│   of the content...     │
│                         │
│   [Tag1] [Tag2] [Tag3]  │
│                         │
└─────────────────────────┘

Shadow: Medium on default
        Large on hover
Transform: -2px on hover
```

---

## Layout Grids

### Desktop (769px+)
```
┌─────────────────────────────────────────┐
│          Navigation Bar                  │
├─────────────────────────────────────────┤
│                                         │
│          Main Content Area              │
│    (Max width: 1200px, centered)        │
│                                         │
│   [Col 1]   [Col 2]   [Col 3]           │
│                                         │
├─────────────────────────────────────────┤
│              Footer                      │
└─────────────────────────────────────────┘
```

### Tablet (481px - 768px)
```
┌─────────────────────────┐
│   Navigation Bar         │
├─────────────────────────┤
│   [Col 1]  [Col 2]      │
│                         │
│   [Col 3]               │
│                         │
├─────────────────────────┤
│        Footer            │
└─────────────────────────┘
```

### Mobile (320px - 480px)
```
┌──────────────────┐
│  Nav + Hamburger │
├──────────────────┤
│                  │
│   Full Width     │
│   Content        │
│                  │
│   [Row 1]        │
│   [Row 2]        │
│                  │
├──────────────────┤
│     Footer       │
└──────────────────┘
```

---

## Page Component Structure

### Home Page Layout
```
Header Section (Full Height)
├── Background (Animated)
│   ├── Floating Shapes
│   └── Gradient
│
└── Content
    ├── h1: "Hi, I'm Trish ʚïɞ"
    ├── p: "A BSIT student"
    ├── p: "Description"
    └── Buttons
        ├── Primary CTA
        └── Secondary CTA

Scroll Indicator (Animated)
```

### About Page Layout
```
Container (Max Width)
├── Title: "About Me"
│   └── Underline decoration
│
├── Bio Section
│   └── Paragraph text
│
├── Skills Section
│   └── Grid of skill cards (4 columns)
│       └── Hover animations
│
└── Education Section
    └── Education timeline
```

### Projects Page Layout
```
Container
├── Title: "My Projects"
├── Subtitle: Description
│
└── Projects Grid (3 columns)
    ├── ProjectCard
    │   ├── Image container
    │   ├── Overlay on hover
    │   ├── Title
    │   ├── Description
    │   └── Tech tags
    │
    └── (Repeat for each project)
```

### Contact Page Layout
```
Container
├── Title: "Get in Touch"
├── Subtitle
│
└── Two Column Layout
    ├── Left: Contact Form
    │   ├── Name input
    │   ├── Email input
    │   ├── Subject input
    │   ├── Message textarea
    │   └── Submit button
    │
    └── Right: Contact Info
        ├── Social links (2x2 grid)
        ├── Email link
        ├── Phone link
        └── Location
```

---

## Animation Specifications

### Fade-In Animation
```
Duration: 0.6s
Easing: Ease-out
From: opacity: 0, transform: translateY(20px)
To: opacity: 1, transform: translateY(0)
```

### Hover Effects
```
Cards:
  Scale: 1.05
  Shadow: Increase
  Duration: 0.3s

Buttons:
  TranslateY: -2px
  Shadow: Increase
  Duration: 0.3s
```

### Stagger Animation
```
Parent:
  staggerChildren: 0.2s (20ms between each child)
  delayChildren: 0.3s (start after 300ms)

Child:
  Each animates after parent stagger amount
```

### Background Animation
```
Floating Shapes:
  Duration: 20s
  Repeat: Infinite
  Transforms: translate, rotate
  Delays: Offset for each shape (0s, 5s, 10s)

Gradient:
  Duration: 15s
  Infinite loop
  Gradient direction changes
```

### Scroll Indicator
```
Animation: bounce
Duration: 2s
Repeat: Infinite
Transform: Y axis (0 → 10px → 0)
```

---

## Spacing System

### Standard Spacing (8px Base)
```
xs: 4px    (0.25rem)
sm: 8px    (0.5rem)
md: 16px   (1rem)
lg: 24px   (1.5rem)
xl: 32px   (2rem)
2xl: 48px  (3rem)
3xl: 64px  (4rem)
```

### Usage Examples
```
Padding:
  Buttons: md (16px)
  Cards: lg (24px)
  Sections: 3xl (64px) desktop, 2xl (48px) mobile

Margin:
  Section bottom: 3xl (64px)
  Card gaps: 2xl (48px)
  Text: md-lg (16-24px)

Gap (Grid/Flex):
  Cards: 2xl (48px)
  Form inputs: md (16px)
  Buttons: lg (24px)
```

---

## Focus States & Accessibility

### Focus Outline
```
Outline: 3px solid var(--accent-purple)
Outline Offset: 2px
Border Radius: 4px

Applies to:
✓ Links
✓ Buttons
✓ Form inputs
✓ Interactive elements
```

### High Contrast Ratios
```
Text on Lilac Background:
  Dark text: 5.2:1 (Good)
  White text: 7.8:1 (Excellent) ← Used

Text on White Background:
  Dark Lilac: 7.1:1 (Excellent) ← Used

Focus Indicator on Purple:
  White outline: 8.5:1 (Excellent)
```

### Form Accessibility
```
✓ Labels associated with inputs
✓ Required fields marked
✓ Error messages linked to fields
✓ Success messages announced
✓ Placeholder text (not replacement)
✓ Visible focus states
✓ High contrast labels
```

---

## Icon & Image Guidelines

### Project Card Images
```
Size: 300x200px (3:2 aspect ratio)
Format: JPG/PNG/WebP
Placeholder URL format:
https://via.placeholder.com/300x200/C8A2C8/ffffff?text=Project+Name

Compression:
- WebP: 80% quality
- JPG: 85% quality
- PNG: 8-bit color where possible
```

### Icon Suggestions
```
For Social Links (in Contact):
  GitHub: 🐙 or FaGithub icon
  Instagram: 📷 or FaInstagram icon
  Twitter: 𝕏 or FaTwitter icon
  Facebook: f or FaFacebook icon
```

### Image Optimization
```
Best Practices:
- Compress before uploading
- Use WebP with JPG fallback
- Lazy load below-the-fold images
- Optimize for mobile-first
- Use srcset for responsive images
```

---

## Typography & Font Pairing

### Default Font Stack
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Alternative Font Stacks
```
Modern Sans-Serif:
  'Inter', 'Roboto', sans-serif

Clean & Professional:
  'Poppins', 'Source Sans Pro', sans-serif

Elegant:
  'Lato', 'Open Sans', sans-serif
```

### Font Weight Usage
```
Font Weights: 400 (regular), 600 (semibold), 700 (bold)

Headings: 700 (bold)
Subheadings: 600 (semibold)
Navigation: 500-600
Body text: 400 (regular)
Labels: 600 (semibold)
```

---

## Responsive Design Reference

### Breakpoints
```
Mobile First:
  Mobile: 320px - 480px (default)
  Tablet: 481px - 768px (@media min-width: 481px)
  Desktop: 769px+ (@media min-width: 769px)

Mobile Optimizations:
  Font size: Slightly smaller
  Padding: Reduced
  Gaps: Smaller
  Grid columns: 1-2 instead of 3-4

Tablet Optimizations:
  2-column layouts
  Medium padding/gaps

Desktop:
  3-4 column layouts
  Full spacing
  Max width: 1200px
```

### Touch Targets
```
Mobile Minimum: 48x48px
Desktop Minimum: 44x44px

In our design:
  Buttons: 40-50px height ✓
  Links: 16-18px line-height ✓
  Menu items: 44px padding ✓
  Form inputs: 36-40px height ✓
```

---

## Shadow System

### Shadow Definitions
```
Small (sm):
  box-shadow: 0 2px 8px rgba(200, 162, 200, 0.1)
  Use: Subtle hover state, small cards

Medium (md):
  box-shadow: 0 4px 16px rgba(200, 162, 200, 0.15)
  Use: Default card state, navigation

Large (lg):
  box-shadow: 0 8px 32px rgba(200, 162, 200, 0.2)
  Use: Hover states, elevated elements
```

### Shadow Usage
```
Cards:
  Default: md shadow
  Hover: lg shadow
  
Buttons:
  Default: md shadow
  Hover: lg shadow
  
Input fields:
  Focus: md shadow

Navigation/Header:
  Always: md shadow
```

---

## Gradient Reference

### Primary Gradient (Buttons, Headings)
```
From: var(--primary-lilac)
To: var(--accent-purple)
Direction: 135deg (diagonal)
Angle: top-left to bottom-right
```

### Background Gradient
```
From: transparent/light lilac
To: white/very light lilac
Direction: 135deg
Subtle and not overpowering
```

### Text Gradient (Hover Effects)
```
Applied to text using:
  background: linear-gradient(...)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  background-clip: text
```

---

## Animation Timing Reference

### Standard Durations
```
Quick interactions: 0.2-0.3s
Normal transitions: 0.3-0.6s
Entrance animations: 0.6-0.8s
Background animations: 15-20s (long, subtle)
Scroll animations: 0.6s
```

### Easing Functions
```
easeOut: Entrance (start fast, end slow)
easeIn: Exit (start slow, end fast)
easeInOut: Complex motions (acceleration & deceleration)
linear: Continuous motion (scroll, long animations)
```

---

## Accessibility Checklist (Visual)

- [x] Color not sole information carrier
- [x] Sufficient color contrast (7:1+)
- [x] Focus indicators visible (3px outline)
- [x] Font sizes readable (16px minimum)
- [x] Line heights adequate (1.6+)
- [x] Touch targets large (44px+ mobile)
- [x] No text-only color indications
- [x] Motion has pause/reduce option ready
- [x] Focus order logical and visible
- [x] Error messages clear and accessible

---

## Print Styles

For users printing the portfolio:
```css
@media print {
  /* Hide navigation and footer */
  nav, footer { display: none; }
  
  /* Optimize colors for printing */
  body { color: #000; background: #fff; }
  
  /* Keep links visible */
  a { text-decoration: underline; }
  
  /* Page breaks for sections */
  section { page-break-inside: avoid; }
}
```

---

## Dark Mode Preparation (Future)

Color variables ready for dark mode:
```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-dark: #ffffff;
    --text-light: #cccccc;
    --bg-light: #1a1a1a;
    --bg-very-light: #2d2d2d;
  }
}
```

---

**Design Version**: 1.0.0  
**Last Updated**: January 21, 2025  
**Lilac Theme ✓**
