# Modern Developer Portfolio

A dark-themed, minimalistic portfolio website template built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a modern developer aesthetic.

## Features

- 🌙 Dark mode by default with light mode support
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and App Router
- 🎨 Styled with Tailwind CSS and shadcn/ui
- ✨ Smooth animations with Framer Motion
- 🔍 SEO optimized
- 🚀 Fast and performant

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

1. Update the metadata in `app/layout.tsx`
2. Modify the content in each section component:
   - `components/sections/hero.tsx`
   - `components/sections/about.tsx`
   - `components/sections/projects.tsx`
   - `components/sections/contact.tsx`

### Projects

Edit the `projects` array in `components/sections/projects.tsx` to showcase your work:

```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    image: "/path-to-image.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/project",
    demo: "https://project-demo.com",
  },
  // Add more projects...
];
```

### Social Links

Update the `socialLinks` array in `components/sections/contact.tsx` with your social media profiles:

```typescript
const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yourusername",
  },
  // Add more social links...
];
```

### Styling

The project uses Tailwind CSS for styling. You can customize the theme colors in `app/globals.css` and the Tailwind configuration in `tailwind.config.js`.

## Deployment

The easiest way to deploy your portfolio is using the [Vercel Platform](https://vercel.com/new).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://framer.com/motion)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
