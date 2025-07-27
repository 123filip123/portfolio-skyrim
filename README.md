# Portfolio Skyrim

A personal portfolio website with a Skyrim theme, built with Next.js and TypeScript.

## Features

- **Skyrim-inspired UI**: Immersive design with Skyrim aesthetics
- **Interactive Side Menu**: Animated navigation with Skyrim-style arrows
- **Background Music**: Optional ambient Skyrim music (Secunda)
- **Responsive Design**: Works on desktop and mobile devices
- **Project Showcase**: Display your projects with custom cards
- **Contact Form**: Get in touch section

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Skyrim-themed UI components

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/123filip123/portfolio-skyrim.git
cd portfolio-skyrim
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
portfolio-skyrim/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── ui/                # Reusable UI components
│   └── utils/             # Utility functions
├── public/                # Static assets
│   ├── fonts/             # Custom fonts
│   ├── button/            # Button assets
│   └── secunda.mp3        # Background music
└── README.md
```

## Customization

- Update project information in `app/utils/projects.ts`
- Modify text content in `app/utils/strings.ts`
- Replace assets in the `public/` directory
- Customize styling in `app/globals.css`

## Deployment

This portfolio can be deployed on Vercel, Netlify, or any other hosting platform that supports Next.js applications.

## License

This project is open source and available under the [MIT License](LICENSE).
