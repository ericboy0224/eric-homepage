# Eric Lin's Personal Website

This is a personal website and blog for Eric Lin, a full-stack developer based in Taipei. The project is built using Next.js and incorporates various modern web development technologies and practices.

## Features

- Responsive design
- Dark mode support
- Dynamic content rendering
- Blog functionality with MDX support
- Work experience showcase
- Animated UI components

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Contentlayer
- Framer Motion
- MDX

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```
3. Run the development server:
   ```
   pnpm dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `src/app`: Main application pages and layouts
- `src/components`: Reusable React components
- `src/lib`: Utility functions
- `posts`: MDX blog posts
- `public`: Static assets

## Key Components

- Header: Navigation and theme toggle
- Banner: Animated introduction section
- Work Section: Showcase of work experiences
- Blog: Dynamic blog posts using MDX

## Styling

The project uses Tailwind CSS for styling, with custom configurations in `tailwind.config.ts`. Global styles are defined in `src/app/globals.css`.

## Content Management

Blog posts are managed using Contentlayer, allowing for easy creation and management of MDX content.

## Deployment

The project is configured for easy deployment on Vercel.

## License

This project is open-source and available under the MIT License.