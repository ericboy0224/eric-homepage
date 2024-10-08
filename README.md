# Eric Lin's Personal Website

Eric Lin is a full-stack developer and software engineer based in Taipei, with expertise in React, Next.js, Go, and MongoDB. This repository contains the source code for his personal website and blog.

## About Eric Lin

- Full-stack Developer with 3+ years of experience
- Specializes in React, Next.js, Go, and MongoDB
- Based in Taipei, Taiwan
- Passionate about creating efficient and scalable web applications

[LinkedIn](https://www.linkedin.com/in/jia-hao-lin/) | [GitHub](https://github.com/ericboy0224) | [Instagram](https://www.instagram.com/babydogofmyg/)

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
2. Download and install nvm (Node Version Manager):
   ```
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```
3. Use the correct Node.js version:
   ```
   nvm use
   ```
4. Install dependencies and run the development server using the Makefile:
   ```
   make dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

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