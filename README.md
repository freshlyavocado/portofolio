# 🚀 Portfolio v2

Personal portfolio website built with modern web technologies, featuring smooth animations and a clean, responsive design.

## ✨ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lenis](https://lenis.darkroom.engineering/) | Smooth scrolling |
| [Lucide React](https://lucide.dev/) | Icons |

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/freshlyavocado/portofolio.git

# Navigate to the project
cd portofolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── about/        # About page
│   ├── contact/      # Contact page
│   ├── works/        # Works/projects page
│   ├── side-b/       # Side-B page
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/
│   ├── sections/     # Page section components
│   └── ui/           # Reusable UI components
└── lib/
    └── utils.ts      # Utility functions
```

## 🛠️ Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🚀 Deployment

This project is configured for deployment on [Vercel](https://vercel.com/).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
