# YC Directory

YC Directory is a **Next.js-based platform** designed to help entrepreneurs pitch their ideas, connect with like-minded individuals, and grow their startups. Users can submit their startup ideas, vote on pitches, and participate in virtual competitions. The platform is built with modern web technologies and integrates with **Sanity.io** for content management and **GitHub OAuth** for authentication.

---

## Features

- **Pitch Submission**: Entrepreneurs can submit their startup ideas with detailed descriptions, categories, and images.
- **Voting System**: Users can vote on pitches to help the best ideas rise to the top.
- **User Profiles**: Each user has a profile showcasing their submitted startups and bio.
- **Search Functionality**: Users can search for startups by title, category, or author.
- **Authentication**: GitHub OAuth integration for secure login and user management.
- **Markdown Support**: Pitch details support Markdown for rich text formatting.
- **Responsive Design**: Fully responsive design for seamless use on all devices.
- **Incremental Static Regeneration (ISR)**: Utilizes Next.js ISR for fast and dynamic content updates.
- **Real-time Updates**: Sanity.io live preview and real-time updates for content changes.
- **Customizable UI**: Built with **Tailwind CSS** and **shadcn/ui** for a modern and customizable user interface.

---

## Technologies Used

- **Frontend**:
  - **Next.js**: A React framework for server-side rendering, static site generation, and API routes.
  - **Tailwind CSS**: Utility-first CSS framework for styling.
  - **shadcn/ui**: Reusable and customizable UI components.
  - **TypeScript**: Strongly typed JavaScript for better developer experience.
  - **Markdown Editor**: Integrated Markdown editor for pitch submissions.

- **Backend**:
  - **Sanity.io**: A headless CMS for managing startup and user data.
  - **NextAuth.js**: Authentication library for handling user sessions and OAuth.
  - **Server Actions**: Next.js server actions for form submissions and data mutations.

- **Deployment**:
  - **Vercel**: Deployment platform for hosting the application.
  - **Sanity Studio**: Hosted on the same domain for easy content management.

---

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v10.8.3 or higher)
- **Sanity.io account** (for CMS setup)
- **GitHub OAuth credentials** (for authentication)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/yc-directory.git
   cd yc-directory
