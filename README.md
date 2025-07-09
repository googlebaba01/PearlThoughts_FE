# Teacher Management Interface

A modern, responsive teacher management interface built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates contemporary UI/UX practices with a focus on accessibility and responsive design.

## 🚀 Live Demo

[Add your Vercel/Netlify deployment URL here]

## ✨ Features

### Core Functionality
- **Teacher Profile Management** - View and edit teacher details, contact information, and qualifications
- **Contact Information** - Manage multiple emails, phone numbers, and addresses with type categorization
- **Qualifications Management** - Separate private and group qualifications with rate management
- **Availability Calendar** - Interactive calendar for scheduling and availability tracking
- **Responsive Design** - Mobile-first approach with adaptive layouts

### Technical Features
- **TypeScript** - Full type safety throughout the application
- **Next.js 14** - App Router with server and client components
- **Tailwind CSS** - Utility-first styling with custom design system
- **Responsive Sidebar** - Collapsible navigation with mobile overlay
- **Accessibility** - WCAG compliant with ARIA labels and keyboard navigation
- **Modern UI** - Clean, contemporary design with micro-interactions

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Heroicons
- **Calendar:** React Big Calendar
- **Date Handling:** date-fns
- **Deployment:** Vercel/Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/googlebaba01/PearlThoughts_FE.git
   cd pearlthoughts_fe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
pearlthoughts_fe/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Main teacher dashboard
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Sidebar.tsx    # Responsive sidebar with toggle
│   │   │   ├── Topbar.tsx     # Header with user info
│   │   │   └── MainContainer.tsx
│   │   └── teacher/           # Teacher-specific components
│   │       ├── TeacherDetailsCard.tsx
│   │       ├── EmailCard.tsx
│   │       ├── PhoneCard.tsx
│   │       ├── AddressCard.tsx
│   │       ├── QualificationsTable.tsx
│   │       ├── GroupQualificationsTable.tsx
│   │       ├── AvailabilityCalendar.tsx
│   │       └── TabbedSection.tsx
│   └── react-big-calendar.d.ts # Type definitions
├── public/                    # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Design Decisions

### UI/UX Philosophy
- **Clean & Minimal** - Focus on content with subtle visual hierarchy
- **Consistent Spacing** - Using Tailwind's 4px spacing scale
- **Modern Color Palette** - Neutral grays with blue/purple accents
- **Micro-interactions** - Hover effects and smooth transitions
- **Mobile-First** - Responsive design starting from mobile breakpoints

### Accessibility Features
- **ARIA Labels** - Descriptive labels for all interactive elements
- **Keyboard Navigation** - Full keyboard accessibility
- **High Contrast** - WCAG AA compliant color ratios
- **Semantic HTML** - Proper heading hierarchy and landmarks
- **Focus Management** - Visible focus indicators

### Component Architecture
- **Reusable Components** - Modular design for maintainability
- **Type Safety** - TypeScript interfaces for all props
- **Server/Client Separation** - Optimal performance with Next.js App Router
- **State Management** - Local state with React hooks

## 🔧 Key Components

### Layout Components
- **Sidebar** - Responsive navigation with mobile overlay
- **Topbar** - Header with user info and sidebar toggle
- **MainContainer** - Content wrapper with responsive padding

### Teacher Management Components
- **TeacherDetailsCard** - Basic teacher information
- **EmailCard/PhoneCard/AddressCard** - Contact information with CRUD operations
- **QualificationsTable** - Private qualifications management
- **GroupQualificationsTable** - Group qualifications management
- **AvailabilityCalendar** - Interactive scheduling calendar
- **TabbedSection** - Multi-tab interface for additional features

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 768px - Stacked layout, collapsible sidebar
- **Tablet:** 768px - 1024px - Side-by-side cards
- **Desktop:** > 1024px - Full layout with always-visible sidebar

### Mobile Features
- Hamburger menu for sidebar toggle
- Touch-optimized interactions
- Swipe gestures for navigation
- Overlay sidebar with backdrop

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Deploy automatically on push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `.next`
3. Deploy automatically on push to main branch

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Build for production
npm run build
```

## 📝 Assumptions Made

1. **Data Management** - Currently using local state; in production, would integrate with backend API
2. **Authentication** - No authentication implemented; would add in production
3. **Data Persistence** - Changes are not persisted; would add database integration
4. **Real-time Updates** - No real-time features; would add WebSocket integration if needed
5. **Internationalization** - Single language (English); would add i18n for multi-language support

## 🔮 Future Enhancements

- **Backend Integration** - API endpoints for data persistence
- **Authentication** - User login and role-based access
- **Real-time Updates** - WebSocket integration for live updates
- **Advanced Calendar** - Recurring events, conflict detection
- **Search & Filter** - Advanced search capabilities
- **Export/Import** - Data export functionality
- **Dark Mode** - Theme switching capability
- **Offline Support** - Service worker for offline functionality

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Gajendra Kumar Nagar

---
