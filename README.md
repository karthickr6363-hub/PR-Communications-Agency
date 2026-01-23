# Prestige PR & Communications Agency Website

A premium PR & Communications agency website built with Bootstrap 5, featuring a strict 3-color design system and comprehensive client management functionality.

## 🎨 Design System

### Color Palette (Strict 3-Color Rule)
- **Obsidian Black** — `#0B0D10` (70% usage - Luxury base, authority)
- **Ivory White** — `#F5F5F0` (25% usage - Text, cards, clarity)  
- **Royal Gold** — `#C6A24A` (5% usage - CTAs, highlights, premium accents)

### Usage Guidelines
- 70% Black for backgrounds and primary elements
- 25% White for text content and card backgrounds
- 5% Gold ONLY for buttons, links, dividers, focus glow, and stat highlights

## 🏗️ Project Structure

```
PR & Communications Agency/
├── index.html                 # Home Page 1 - Brand Power Mode
├── home2.html                 # Home Page 2 - Media & Press Mode
├── about.html                 # About page with agency story and leadership
├── services.html              # Services page with expandable panels
├── industries.html            # Industries page showcasing different sectors
├── case-studies.html          # Case studies page (pending)
├── press-room.html            # Press room page (pending)
├── careers.html               # Careers page (pending)
├── contact.html               # Contact page (pending)
├── client-login.html          # Client authentication system
├── dashboard.html             # Client dashboard
├── admin-dashboard.html       # Admin dashboard (pending)
├── css/
│   └── styles.css             # Custom CSS with 3-color system
├── js/
│   └── main.js                # Custom JavaScript functionality
├── assets/
│   ├── images/                # Image assets
│   ├── videos/                # Video assets
│   └── documents/             # Downloadable documents
└── README.md                  # This file
```

## 🚀 Features Implemented

### ✅ Completed Features

#### Core Pages
- **Home Page 1 (Brand Power Mode)**: Hero section, services preview, global impact stats, featured case studies
- **Home Page 2 (Media & Press Mode)**: Live media feed, press coverage, crisis response workflow, thought leadership
- **About Page**: Agency story timeline, leadership team, mission & values, global offices
- **Services Page**: Expandable service panels, process workflow, investment options
- **Industries Page**: Industry showcase with filtering, expertise areas, success metrics

#### Authentication & Dashboard
- **Client Login System**: Secure login/registration with OTP support, 2FA ready
- **Client Dashboard**: Campaign overview, media coverage, reports, approvals, messaging

#### Design & UX
- **Strict 3-Color Design System**: Consistent implementation across all pages
- **Premium Animations**: Hover effects, transitions, micro-interactions
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Navigation**: Complete main navigation with all menu items

### 🔄 In Progress
- Case Studies page with filters and success stories
- Press Room page with media kit and press releases
- Careers page with positions and culture gallery
- Admin Dashboard with client and campaign management

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Custom properties, animations, responsive design
- **Bootstrap 5**: Grid system, components, utilities
- **JavaScript ES6+**: Modern JavaScript functionality
- **Chart.js**: Data visualization for dashboards
- **Bootstrap Icons**: Consistent iconography

## 🎯 Key Features

### Premium UI Elements
- **Luxury Motion System**: Cinematic transitions and parallax effects
- **Micro-Interactions**: Magnetic buttons, hover shimmers, notification glows
- **Dashboard Effects**: Card slide-ins, live feed animations, skeleton loaders

### Client Management
- **Secure Authentication**: Login/registration with OTP and 2FA
- **Brand Command Center**: Campaign management, media monitoring, analytics
- **Real-time Updates**: Live media feeds, notification system
- **Approval Workflow**: Content review and approval process

### Content Management
- **Dynamic Content**: Expandable panels, filtering systems, search functionality
- **Media Integration**: Video backgrounds, image galleries, document downloads
- **SEO Optimized**: Semantic HTML, meta tags, structured data

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ with enhanced interactions
- **Tablet**: 768px-1199px with adapted layouts
- **Mobile**: <768px with touch-optimized interface

## 🎨 Design Principles

### Visual Hierarchy
- Clear typography scale with consistent spacing
- Strategic use of gold accents for CTAs and highlights
- Balanced composition with 70/25/5 color distribution

### User Experience
- Intuitive navigation with clear visual feedback
- Smooth transitions and micro-interactions
- Accessible design with WCAG compliance considerations

### Performance
- Optimized assets and lazy loading
- Efficient CSS with custom properties
- Minimal JavaScript for fast load times

## 🔧 Customization

### Colors
All colors are defined as CSS custom properties in `:root`:
```css
:root {
    --obsidian-black: #0B0D10;
    --ivory-white: #F5F5F0;
    --royal-gold: #C6A24A;
}
```

### Typography
The design uses system fonts for optimal performance:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Animations
Custom animations are defined in the CSS with performance optimizations:
```css
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
```

## 🚀 Getting Started

1. **Clone the repository** or download the files
2. **Open `index.html`** in your preferred browser
3. **Navigate through the site** using the main navigation
4. **Test the dashboard** by logging in with any credentials

### Development Server
For local development, use a live server extension in VS Code or:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## 📊 Browser Support

- **Chrome/Chromium**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🔒 Security Features

- **SSL Ready**: Designed for HTTPS deployment
- **Input Validation**: Form validation and sanitization
- **XSS Protection**: Safe JavaScript practices
- **CSRF Protection**: Token-based form protection (ready for backend integration)

## 📈 Analytics & Tracking

The website is ready for:
- **Google Analytics 4**: Enhanced measurement
- **Tag Manager**: Custom event tracking
- **Heatmaps**: User behavior analysis
- **Performance Monitoring**: Core Web Vitals tracking

## 🤝 Contributing

1. Follow the strict 3-color design system
2. Maintain responsive design principles
3. Ensure accessibility compliance
4. Test across all target browsers
5. Optimize for performance

## 📞 Support

For questions or support:
- **Email**: info@prestigepr.com
- **Phone**: +1 (555) 123-4567
- **Website**: www.prestigepr.com

---

© 2024 Prestige PR & Communications. All rights reserved.
