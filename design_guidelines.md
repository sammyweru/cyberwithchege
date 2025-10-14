# Design Guidelines: Samuel Chege Waweru Portfolio

## Design Approach
**Utility-Focused Professional Portfolio** - A clean, trustworthy, minimalist design emphasizing readability and professionalism for a Cloud Security Engineer.

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary Background: Warm cream/off-white `#F5F5DC` (38 47% 91%)
- Primary Text: Dark slate gray `#2F4F4F` (180 25% 25%)
- Accent Color: Muted sophisticated gold/tan `#C4A484` (30 35% 65%)
- Supporting neutrals: Lighter variations of slate gray for secondary text

**Dark Mode:**
- Primary Background: Deep charcoal with warm undertone `#1A1C1E`
- Primary Text: Warm off-white `#F5F5DC`
- Accent Color: Brighter gold `#D4B494`
- Maintain professional, trustworthy feel in dark mode

### B. Typography

**Font Family:** Inter or Poppins (modern, clean sans-serif)

**Hierarchy:**
- H1 (Name): 3xl-4xl, font-bold
- H2 (Tagline/Section Titles): 2xl-3xl, font-semibold
- H3 (Subsections): xl-2xl, font-semibold
- Body: base-lg, font-normal
- Small text (tags/pills): sm, font-medium

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 24 for consistent rhythm
- Section padding: py-16 to py-24
- Component spacing: gap-6 to gap-8
- Container max-width: max-w-6xl for content, max-w-7xl for full sections

**Responsive Breakpoints:**
- Mobile-first approach
- Single column on mobile, multi-column on md/lg breakpoints
- Skills: 1 column (mobile) → 3 columns (lg)
- Projects: 1 column (mobile) → 2 columns (md) → 3 columns (lg)

## Component Specifications

### Navigation Bar
- Sticky/fixed top navigation with subtle backdrop blur
- Smooth scroll links to: Home, About, Skills, Projects, Contact
- Clean horizontal layout with accent color on hover/active states

### Hero Section
- **No large hero image** - Focus on typography and clean presentation
- Centered content with generous vertical padding (py-24 to py-32)
- H1: Samuel Chege Waweru (display prominently)
- H2: "Building and Defending the Secure Cloud | Cloud Security • DevSecOps • Networking"
- Two CTAs side-by-side: "View My Work" (primary accent) and "Get In Touch" (outline)

### About Me Section
- Clean typography-focused layout
- Single column prose format with max-w-3xl for optimal reading
- Professional narrative displaying expertise and journey

### Skills & Expertise Section
- Title: "My Professional Toolbox"
- Introductory paragraph before skill cards
- Three distinct cards/columns:
  1. **Cloud Architecture & Security** (AWS, Azure, OCI focus)
  2. **Network Engineering & Defense** (Architecture & Security)
  3. **Security Analysis & Threat Intelligence** (Tools & Techniques)
- Each card with clear subtitle hierarchy and bulleted/organized content
- Subtle borders and shadows for card differentiation

### Featured Projects Section
- Grid layout: 3 project cards with equal height
- Each card includes:
  - Project title (bold, prominent)
  - Summary description (2-3 lines)
  - Technology tags as pills/badges (accent color background)
  - Two buttons: "View on GitHub" (primary) and "Read the Story" (secondary)
- Consistent card styling with hover elevation effects

### Contact Section
- Title: "Get In Touch"
- **Social Icons** (NOT text links):
  - LinkedIn, GitHub, X icons with proper branding colors
  - Clickable, open in new tab
  - Horizontal layout with hover scale effects
- **Secure Contact Form:**
  - Fields: Name, Email, Message (textarea)
  - Clean input styling with focus states using accent color
  - Submit button with accent background
  - Client-side validation indicators
  - Backend integration for secure email delivery to chegesam68@gmail.com

### Footer
- Simple, centered layout
- Text: "© 2025 Samuel Chege Waweru. All Rights Reserved."
- Muted text color on cream background

## Visual Elements

### Buttons
- Primary: Accent gold background with dark text
- Secondary/Outline: Border with accent color, transparent background
- Hover states: Subtle scale or brightness adjustment
- Consistent padding and rounded corners

### Cards & Containers
- Subtle shadows for depth
- Rounded corners (rounded-lg to rounded-xl)
- Borders using accent color at reduced opacity
- Hover states for interactive cards

### Icons
- Use Heroicons or similar for consistency
- Social media: Brand-specific icon colors on hover
- Accent color for general UI icons

## Accessibility
- High contrast between text and backgrounds
- Focus indicators on all interactive elements
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support

## Security Implementation Notes
- Contact form: Backend validation and sanitization
- XSS prevention on all user inputs
- Rate limiting on form submissions
- Secure email delivery via Replit Mail or similar integration