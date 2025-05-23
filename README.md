# Nanocore Staffing Website

This is the official website for Nanocore Staffing, a specialized staffing company for the semiconductor industry.

## Getting Started

Follow these steps to run the website locally on your machine:

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (v8 or later) or [yarn](https://yarnpkg.com/) (v1.22 or later)
- [Git](https://git-scm.com/) (optional, for cloning the repository)

### Installation Steps

1. **Clone the repository** (if you have Git installed)

   \`\`\`bash
   git clone https://github.com/your-username/nanocore-website.git
   cd nanocore-website
   \`\`\`

   Alternatively, you can download and extract the ZIP file of the project.

2. **Install dependencies**

   Using npm:
   \`\`\`bash
   npm install
   \`\`\`

   Or using yarn:
   \`\`\`bash
   yarn install
   \`\`\`

3. **Run the development server**

   Using npm:
   \`\`\`bash
   npm run dev
   \`\`\`

   Or using yarn:
   \`\`\`bash
   yarn dev
   \`\`\`

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the website running locally.

### Building for Production

To create a production build:

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

To start the production server:

\`\`\`bash
npm run start
# or
yarn start
\`\`\`

## Project Structure

- `app/` - Next.js app router pages and layouts
- `components/` - Reusable React components
- `public/` - Static assets like images and fonts
- `styles/` - Global CSS and styling utilities

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Three.js](https://threejs.org/) - 3D graphics library
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## Customization

- To modify the color scheme, edit the `tailwind.config.ts` file
- To update content, modify the components in the `components/` directory
- To add new pages, create new files in the `app/` directory

## Deployment

This website can be deployed to any hosting platform that supports Next.js applications, such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## Support

For any questions or issues, please contact the development team.
\`\`\`

Let's also update the CSS to add the new animation classes:

```typescriptreact file="app/globals.css"
[v0-no-op-code-block-prefix]@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 142 70% 50%; /* Mint green */
    --primary-foreground: 210 40% 98%;
    --secondary: 217 91% 60%; /* Blue */
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 142 70% 50%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 142 70% 50%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 142 70% 50%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217 91% 60%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 142 70% 50%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 142 70% 50%;
  }

  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer components {
  .section-padding {
    @apply py-16 md:py-24 px-4 md:px-8 lg:px-16;
  }

  .gradient-bg {
    background: linear-gradient(135deg, #4ade80 0%, #3b82f6 100%);
  }

  .card-hover {
    @apply transition-all duration-300 hover:shadow-lg hover:-translate-y-1;
  }

  .gradient-mint-blue {
    background-image: linear-gradient(135deg, #4ade80 0%, #3b82f6 100%);
  }

  .text-gradient-mint-blue {
    background: linear-gradient(135deg, #4ade80, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .btn-mint-blue {
    @apply bg-gradient-to-r from-mint to-blue text-white hover:opacity-90 transition-all;
  }

  .btn-outline-mint-blue {
    @apply border border-mint text-mint hover:bg-mint/10 transition-all;
  }
}

@layer utilities {
  /* Animation classes */
  .animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes gradientShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradientShift 5s ease infinite;
  }

  @keyframes rotate360 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); }
    25% { transform: translateY(-15px) translateX(5px); }
    50% { transform: translateY(0) translateX(10px); }
    75% { transform: translateY(15px) translateX(5px); }
  }

  .hover-rotate:hover {
    animation: rotate360 0.5s ease-in-out;
  }

  .circuit-pattern {
    background-image: radial-gradient(#4ade80 1px, transparent 1px), radial-gradient(#3b82f6 1px, transparent 1px);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
    opacity: 0.1;
  }

  .animate-float {
    animation: float 15s ease-in-out infinite;
  }
}
