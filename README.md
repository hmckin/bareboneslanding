# Barebones Landing Page

A modern, single-page landing page built with Next.js, Tailwind CSS, and Shadcn UI components.

## Features

- **Header**: Fixed navigation with logo and links
- **Hero Section**: Main headline with CTA buttons and glassmorphism card
- **Feature Sections**: Three feature blocks with 3D translucent icons
- **Sunset Image Section**: Full-width background with ticket card overlay
- **Pricing Section**: Three pricing tiers with cards
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **Glassmorphism Effect**: Translucent, frosted glass look on hero card

## Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Component library
- **TypeScript** - Type safety
- **Inter Font** - Modern sans-serif typography

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   └── ui/                  # Shadcn UI components
│       ├── button.tsx       # Button component
│       ├── card.tsx         # Card components
│       └── badge.tsx        # Badge component
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── images/              # Static assets
│       ├── barebones-black.svg
│       ├── barebones-white.svg
│       ├── sunset.png
│       └── 3D icons...
└── tailwind.config.js       # Tailwind configuration
```

## Assets

The project uses the following assets:

- **Logos**: barebones black and white SVG versions
- **3D Icons**: Translucent pushpin, gear, and rocket icons
- **Background**: Sunset image for the full-width section

## Customization

- **Colors**: Modify the CSS variables in `globals.css`
- **Typography**: Update font settings in `tailwind.config.js`
- **Components**: Customize Shadcn UI components in `components/ui/`
- **Content**: Edit text and images in `app/page.tsx`

## License

This project is open source and available under the [MIT License](LICENSE).
