# Design System Specification

**Version**: 1.0.0  
**Date**: November 20, 2025  
**Status**: Active

---

## Overview

This document defines the complete design system for the Project Management Dashboard. It serves as the single source of truth for all visual design decisions, component specifications, and UI patterns.

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Icons](#icons)
7. [Accessibility](#accessibility)
8. [Responsive Design](#responsive-design)
9. [Animations](#animations)
10. [Themes](#themes)

---

## Design Principles

### 1. Clarity Over Complexity
- Information hierarchy is immediately obvious
- Actions are clear and unambiguous
- No unnecessary ornamentation

### 2. Consistency Everywhere
- UI patterns repeat throughout the application
- Same actions look and behave the same
- Predictable user experience

### 3. Accessibility First
- WCAG 2.1 AA compliance minimum
- Keyboard navigation support
- Screen reader compatible
- Sufficient color contrast

### 4. Performance Matters
- Fast load times
- Smooth animations
- Optimized assets
- Progressive enhancement

### 5. Professional & Modern
- Clean, contemporary aesthetics
- Appropriate for legal/professional context
- Subtle sophistication
- Glassmorphic accents (where appropriate)

---

## Color System

### Brand Colors

**Primary** (#030213 - Deep Navy)
- Usage: Primary actions, headers, emphasized text
- Accessible on white backgrounds
- rgb(3, 2, 19)

**Secondary** (#2D9CDB - Sky Blue)
- Usage: Links, secondary actions, highlights
- Accent color for interactive elements
- rgb(45, 156, 219)

**Tertiary** (#A6E1FF - Light Sky Blue)
- Usage: Backgrounds, subtle highlights, glassmorphic effects
- Softer accent for backgrounds
- rgb(166, 225, 255)

### Semantic Colors

**Success** - Green
- Light: #F0FDF4 (bg-green-50)
- Base: #22C55E (bg-green-600)
- Dark: #15803D (bg-green-700)
- Usage: Success states, completed tasks, positive trends

**Warning** - Yellow
- Light: #FEF3C7 (bg-yellow-100)
- Base: #EAB308
- Dark: #A16207 (bg-yellow-700)
- Usage: Warnings, pending states, attention needed

**Error/Destructive** - Red
- Light: #FEF2F2 (bg-red-50)
- Base: #EF4444 (text-red-500)
- Dark: #B91C1C (bg-red-600)
- Usage: Errors, destructive actions, overdue items, blocked status

**Info** - Blue
- Light: #EFF6FF (bg-blue-50)
- Base: #3B82F6 (bg-blue-500)
- Dark: #2563EB (bg-blue-600)
- Usage: Informational states, active projects

### Neutral Palette (Grayscale)

- Gray 50: #F9FAFB - Lightest backgrounds
- Gray 100: #F3F4F6 - Input backgrounds, subtle backgrounds
- Gray 200: #E5E7EB - Borders, dividers
- Gray 300: #D1D5DB - Inactive borders
- Gray 400: #9CA3AF - Disabled text
- Gray 500: #6B7280 - Secondary text
- Gray 600: #4B5563 - Primary text (on light bg)
- Gray 700: #374151 - Emphasized text
- Gray 900: #111827 - Headings, dark text

### Status Badge Colors

```css
/* Active - Blue */
.badge-active {
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  color: #1E40AF;
}

/* Pending - Yellow */
.badge-pending {
  background: #FEF3C7;
  border: 1px solid #FDE68A;
  color: #92400E;
}

/* Blocked - Red */
.badge-blocked {
  background: #FEE2E2;
  border: 1px solid #FECACA;
  color: #991B1B;
}

/* Completed - Green */
.badge-completed {
  background: #D1FAE5;
  border: 1px solid #A7F3D0;
  color: #065F46;
}
```

### Glassmorphic Effects

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-strong {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

## Typography

### Font Stack

**Primary**: System font stack for optimal performance
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

**Monospace**: For code or data
```css
font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

### Type Scale

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| xs | 12px | 16px (1.33) | Captions, labels |
| sm | 14px | 20px (1.43) | Body small, table cells |
| base | 16px | 24px (1.5) | Body text, inputs |
| lg | 18px | 28px (1.56) | Emphasized body, subtitles |
| xl | 20px | 28px (1.4) | Section headings |
| 2xl | 24px | 32px (1.33) | Page headings |
| 3xl | 30px | 36px (1.2) | Hero headings |
| 4xl | 36px | 40px (1.11) | Large display |

### Font Weights

- **Normal**: 400 - Body text, descriptions
- **Medium**: 500 - Labels, buttons, emphasized text
- **Semibold**: 600 - Headings, important callouts
- **Bold**: 700 - Strong emphasis (use sparingly)

### Typography Examples

```css
/* Page Heading */
.heading-page {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--color-gray-900);
}

/* Section Heading */
.heading-section {
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: var(--color-gray-700);
}

/* Body Text */
.text-body {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: var(--color-gray-600);
}

/* Label */
.text-label {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-gray-700);
}

/* Caption */
.text-caption {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-gray-500);
}
```

---

## Spacing & Layout

### Spacing Scale

Based on 4px (0.25rem) unit:

| Token | Value | Usage |
|-------|-------|-------|
| 0 | 0px | Reset |
| 0.5 | 2px | Minimal gap |
| 1 | 4px | Tight spacing |
| 2 | 8px | Small padding/margin |
| 3 | 12px | Medium spacing |
| 4 | 16px | Standard padding |
| 6 | 24px | Generous padding |
| 8 | 32px | Section spacing |
| 12 | 48px | Large gaps |
| 16 | 64px | Extra large |
| 20 | 80px | Page sections |

### Layout Grid

**Container Max-Width**: 1440px (7xl)  
**Gutters**: 24px (responsive)

**Breakpoints**:
```css
/* Mobile */
sm: 640px  

/* Tablet */
md: 768px  

/* Desktop */
lg: 1024px  

/* Large Desktop */
xl: 1280px  

/* Extra Large */
2xl: 1536px
```

### Common Layout Patterns

```css
/* Page Container */
.page-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px;
}

/* Card Spacing */
.card-padding {
  padding: 24px; /* Desktop */
  padding: 16px; /* Mobile */
}

/* Section Gap */
.section-gap {
  margin-bottom: 48px;
}
```

---

## Components

### Buttons

#### Primary Button
```tsx
<button className="
  px-4 py-2 
  bg-primary text-primary-foreground 
  rounded-md 
  font-medium text-sm
  hover:opacity-90
  focus:ring-2 focus:ring-primary focus:ring-offset-2
  active:scale-98
  transition-all
">
  Primary Action
</button>
```

**States**:
- Default: Primary color background
- Hover: 90% opacity
- Focus: Ring outline
- Active: Scale 0.98
- Disabled: 50% opacity, no pointer events

#### Secondary Button
```tsx
<button className="
  px-4 py-2 
  bg-secondary text-secondary-foreground 
  border border-input
  rounded-md 
  font-medium text-sm
  hover:bg-accent
  focus:ring-2 focus:ring-ring
  transition-colors
">
  Secondary Action
</button>
```

#### Ghost Button
```tsx
<button className="
  px-4 py-2 
  text-foreground 
  rounded-md 
  font-medium text-sm
  hover:bg-accent
  transition-colors
">
  Tertiary Action
</button>
```

#### Destructive Button
```tsx
<button className="
  px-4 py-2 
  bg-destructive text-destructive-foreground 
  rounded-md 
  font-medium text-sm
  hover:opacity-90
  focus:ring-2 focus:ring-destructive
  transition-all
">
  Delete
</button>
```

#### Button Sizes
- **Small**: `px-3 py-1.5 text-sm`
- **Default**: `px-4 py-2 text-sm`
- **Large**: `px-6 py-3 text-base`

---

### Input Fields

#### Text Input
```tsx
<input 
  type="text"
  className="
    w-full px-3 py-2
    bg-input-background
    border border-input
    rounded-md
    text-sm
    placeholder:text-muted-foreground
    focus:outline-none focus:ring-2 focus:ring-ring
    transition-shadow
  "
  placeholder="Enter text..."
/>
```

**States**:
- Default: Gray background, subtle border
- Focus: Ring outline
- Error: Red border, red ring
- Disabled: Grayed out, not interactive

#### Textarea
Same styling as input, with `resize-y` or `resize-none`

#### Select Dropdown
Uses Radix UI Select component with custom styling

---

### Cards

#### Standard Card
```tsx
<div className="
  bg-white
  border border-gray-200
  rounded-lg
  shadow-sm
  p-6
">
  {/* Card content */}
</div>
```

#### Glass Card (Landing Page)
```tsx
<div className="
  bg-white/5
  backdrop-blur-lg
  border border-white/10
  rounded-xl
  p-6
">
  {/* Card content */}
</div>
```

#### KPI Card
```tsx
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
  <div className="flex items-center justify-between mb-2">
    <span className="text-sm font-medium text-gray-600">Active Projects</span>
    <Icon className="h-5 w-5 text-gray-400" />
  </div>
  <div className="text-3xl font-bold text-gray-900">12</div>
  <p className="text-sm text-green-600 mt-2">+8% from last month</p>
</div>
```

---

### Badges

```tsx
{/* Status Badge */}
<span className="
  inline-flex items-center
  px-2.5 py-0.5
  rounded-full
  text-xs font-medium
  bg-blue-100 text-blue-800
  border border-blue-200
">
  Active
</span>

{/* Priority Badge */}
<span className="
  inline-flex items-center gap-1
  px-2 py-1
  rounded-md
  text-xs font-medium
  bg-red-50 text-red-700
  border border-red-200
">
  <AlertCircle className="h-3 w-3" />
  High Priority
</span>
```

---

### Tables

```tsx
<div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        {/* More headers */}
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr className="hover:bg-gray-50 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          Project Name
        </td>
        {/* More cells */}
      </tr>
    </tbody>
  </table>
</div>
```

**Features**:
- Sortable headers (with up/down icons)
- Hover states on rows
- Responsive (horizontal scroll on mobile)
- Zebra striping optional

---

### Modals/Dialogs

Uses Radix UI Dialog component:

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Modal</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Dialog description text
      </DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button variant="secondary">Cancel</Button>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

**Features**:
- Backdrop overlay (semi-transparent black)
- Centered on screen
- Accessible (ESC to close, focus trap)
- Smooth fade-in animation

---

### Navigation

#### Sidebar (Desktop)
- Width: 240px
- Background: White (light mode), Dark gray (dark mode)
- Active item: Highlighted with accent color
- Icons: 20px, left-aligned with text

#### Mobile Nav
- Hamburger menu
- Drawer from left
- Overlay backdrop
- Same nav items as desktop

#### Breadcrumb
```tsx
<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1">
    <li className="inline-flex items-center">
      <a href="#" className="text-gray-500 hover:text-gray-700">
        Dashboard
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-gray-400" />
        <a href="#" className="ml-1 text-gray-500 hover:text-gray-700">
          Projects
        </a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-gray-400" />
        <span className="ml-1 text-gray-700 font-medium">
          Contract Review
        </span>
      </div>
    </li>
  </ol>
</nav>
```

---

## Icons

**Icon Library**: Lucide React (https://lucide.dev/)

**Icon Sizes**:
- Extra Small: 16px (h-4 w-4)
- Small: 20px (h-5 w-5)
- Medium: 24px (h-6 w-6)
- Large: 32px (h-8 w-8)

**Usage**:
- Icons should always have descriptive alt text or aria-label
- Use consistent sizing within components
- Match icon color to text color for consistency

**Common Icons**:
- Dashboard: `LayoutDashboard`
- Projects: `FolderKanban`
- Tasks: `CheckSquare`
- Team: `Users`
- Settings: `Settings`
- More: `MoreHorizontal`
- Add: `Plus`
- Edit: `Pencil`
- Delete: `Trash2`
- Search: `Search`
- Filter: `Filter`
- Calendar: `Calendar`
- Alert: `AlertCircle`
- Success: `CheckCircle2`

---

## Accessibility

### WCAG 2.1 AA Compliance

**Color Contrast**:
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

**Keyboard Navigation**:
- All interactive elements accessible via Tab
- Logical tab order
- Focus indicators visible (ring outline)
- Skip links for main content

**Screen Readers**:
- Semantic HTML (nav, main, article, section)
- ARIA labels on icon buttons
- Live regions for dynamic content
- Alt text for all images

**Forms**:
- Labels for all inputs
- Error messages linked via aria-describedby
- Required fields indicated
- Inline validation feedback

### Focus States

```css
.focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

All interactive elements must have clear focus states.

---

## Responsive Design

### Breakpoint Strategy

**Mobile First**: Start with mobile and progressively enhance

```css
/* Mobile (default) */
.container {
  padding: 16px;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .container {
    padding: 24px;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .container {
    padding: 32px;
  }
}
```

### Responsive Patterns

**Sidebar**:
- Desktop: Fixed sidebar, 240px wide
- Mobile: Drawer that slides in from left

**Grid**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Tables**:
- Desktop: Full table
- Mobile: Horizontal scroll or card layout

**Typography**:
- Scale down 1-2 sizes on mobile
- Tighter line-height on mobile

---

## Animations

### Timing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Animation Durations
- Instant: 0ms (immediate feedback)
- Fast: 150ms (micro-interactions, hovers)
- Normal: 300ms (modals, dropdowns)
- Slow: 500ms (page transitions)

### Common Animations

```css
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Button Active */
.button:active {
  transform: scale(0.98);
  transition: transform 100ms;
}

/* Smooth Color Transition */
.element {
  transition: background-color 200ms ease-out, color 200ms ease-out;
}
```

### Glassmorphic Animations (Landing Page)

```css
.glass-card {
  transition: all 300ms ease-out;
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
```

---

## Themes

### Light Theme (Default)

```css
:root {
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  --secondary: #2D9CDB;
  --border: rgba(0, 0, 0, 0.1);
  /* ... additional tokens */
}
```

### Dark Theme

```css
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --border: oklch(0.269 0 0);
  /* ... additional tokens */
}
```

**Implementation**: Theme toggle in user menu (future feature)

---

## Component Library

### Existing Components (Radix UI)

All components in `src/components/ui/` are built with Radix UI primitives and custom styling:

- Accordion
- Alert Dialog
- Avatar
- Badge
- Button
- Card
- Checkbox
- Dialog
- Dropdown Menu
- Input
- Label
- Popover
- Progress
- Select
- Separator
- Sheet (Drawer)
- Skeleton (Loading)
- Table
- Tabs
- Textarea
- Toast (Sonner)
- Tooltip

Refer to individual component files for implementation details.

---

## Usage Guidelines

### Do's ✅

- Use design tokens (CSS variables) for colors
- Maintain consistent spacing using the scale
- Follow accessibility guidelines
- Test on multiple screen sizes
- Use semantic HTML
- Provide loading and error states
- Use appropriate typography hierarchy

### Don'ts ❌

- Don't use random colors outside the palette
- Don't create inconsistent component variants
- Don't ignore responsive design
- Don't skip accessibility features
- Don't use text smaller than 12px
- Don't use more than 3 font weights in one view
- Don't animate excessively (causes motion sickness)

---

## Design Tools & Resources

**Figma** (if available): Design files and prototypes  
**Radix UI Docs**: https://www.radix-ui.com/primitives  
**Tailwind CSS Docs**: https://tailwindcss.com/docs  
**Lucide Icons**: https://lucide.dev/  
**WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/

---

## Document Control

**Owner**: Design Agent  
**Reviewers**: Frontend, Product Manager, Orchestrator  
**Next Review**: After MVP implementation

**Change Log**:
- v1.0.0 (2025-11-20): Initial design system specification
