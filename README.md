# 🐝 HireHive — Modern Career & Job Discovery Platform

<p align="center">
  <img src="./HireHive_Logo.svg" alt="HireHive Logo" width="160" height="160" />
</p>

<p align="center">
  <strong>Empowering Talents, Connecting Futures.</strong><br>
  An intelligent, modern career & job discovery ecosystem bridging the gap between top-tier candidates and forward-thinking companies.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/MongoDB-7.2-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Auth-Better_Auth-orange?style=for-the-badge" alt="Better Auth" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License MIT" />
</p>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
  - [For Job Seekers](#for-job-seekers)
  - [For Recruiters & Employers](#for-recruiters--employers)
- [Tech Stack](#-tech-stack)
- [Architecture & Directory Structure](#-architecture--directory-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [Authentication Architecture](#-authentication-architecture)
- [Future Roadmap](#-future-roadmap)
- [Contributing](#-contributing)
- [License & Author](#-license--author)

---

## 🌟 Overview

**HireHive** is a full-stack, production-ready career discovery and talent hiring platform. Engineered with **Next.js 16 App Router**, **React 19**, and **Tailwind CSS v4**, HireHive delivers an ultra-fast, accessible, and frictionless experience for both job seekers and hiring managers.

Whether you are a developer seeking your next high-impact engineering role or an organization building a world-class team, HireHive streamlines the entire discovery-to-hire lifecycle with speed and elegance.

---

## 🚀 Key Features

### For Job Seekers
- 🔍 **Dynamic Job Discovery (`/jobs`)**: Filter and search opportunities by keyword, role category, experience level, remote/hybrid status, and salary range.
- 📄 **Deep Job Detail Insights (`/jobs/[id]`)**: Comprehensive role overview including expectations, compensation, required tech stack, and direct one-click application.
- 🏢 **Company Directory (`/companies`)**: Explore hiring organizations, read about engineering culture, tech stacks, and active openings.
- 📊 **Candidate Dashboard (`/dashboard`)**: Track application status, saved positions, and profile details in a single unified view.

### For Recruiters & Employers
- 🎯 **Recruiter Management Portal (`/dashboard/recruiter`)**: Centralized command center to post new job openings, manage active listings, and review candidate applications.
- 💳 **Transparent Pricing & Plans (`/pricing`)**: Tiered employer subscriptions designed to accommodate everyone from seed startups to enterprise talent operations.
- 🛡️ **Verified Company Profiles (`/company`)**: Establish employer brand presence with custom banners, media, culture highlights, and social links.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Server Components & Server Actions) |
| **Library** | [React 19](https://react.dev/) |
| **Styling & UI** | [Tailwind CSS v4](https://tailwindcss.com/), [HeroUI](https://heroui.com/), [DaisyUI v5](https://daisyui.com/) |
| **Database** | [MongoDB 7.2](https://www.mongodb.com/) (Native Driver & Connection Pooling) |
| **Authentication** | [Better Auth](https://better-auth.com/) (Session-based, Google OAuth, Password Encryption) |
| **Icons & Notifications** | [React Icons](https://react-icons.github.io/react-icons/), [Iconify](https://iconify.design/), [React Hot Toast](https://react-hot-toast.com/) |
| **Compiler & Tooling** | Babel React Compiler Plugin, ESLint 9 |

---

## 📁 Architecture & Directory Structure

```plaintext
HireHive-Job-Discovery-Platform/
├── public/                     # Static assets, SVG illustrations, and icons
├── src/
│   ├── app/                    # Next.js 16 App Router
│   │   ├── api/
│   │   │   └── auth/[...all]/  # Better Auth API endpoints handler
│   │   ├── companies/          # Companies directory listing page
│   │   ├── company/            # Individual company profile preview
│   │   ├── dashboard/          # Candidate management dashboard
│   │   │   └── recruiter/      # Recruiter talent management portal
│   │   ├── forgot-password/    # Password recovery flow
│   │   ├── jobs/               # Job search & exploration page
│   │   │   └── [id]/           # Deep job details & application view
│   │   ├── login/              # User authentication page
│   │   ├── pricing/            # Recruiter subscription tiers
│   │   ├── signup/             # New user onboarding page
│   │   ├── layout.js           # Root layout with providers & theme wrapper
│   │   └── page.js             # High-converting landing page
│   ├── components/             # Reusable UI component library
│   │   ├── CtaSection.jsx      # High-impact Call to Action
│   │   ├── FeaturesSection.jsx # Platform capabilities showcase
│   │   ├── Footer.jsx          # Semantic footer with navigation links
│   │   ├── Hero.jsx            # Dynamic hero with search bar
│   │   ├── JobSection.jsx      # Featured job listings grid
│   │   ├── Navbar.jsx          # Responsive navigation bar with auth state
│   │   ├── PricingSection.jsx  # Interactive pricing cards
│   │   ├── StatsSection.jsx    # Live platform metrics & impact numbers
│   │   └── dashboard/          # Sidebar & dashboard subcomponents
│   └── lib/                    # Shared utilities, auth client, and DB connectors
├── .env.example                # Template for environment variables
├── next.config.mjs             # Next.js configuration
├── postcss.config.mjs          # Tailwind CSS v4 PostCSS configuration
└── package.json                # Project dependencies & npm scripts
```

---

## ⚡ Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.17.0 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster URL)
- Package manager: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Asmual/HireHive-Job-Discovery-Platform.git
   cd HireHive-Job-Discovery-Platform
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env.local` file in the root directory by duplicating `.env.example`:

```bash
cp .env.example .env.local
```

Populate the required credentials in your `.env.local`:

```env
# Better Auth Secret (Generate via: openssl rand -base64 32)
BETTER_AUTH_SECRET=your_super_secret_auth_key
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# Database Configuration
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
DB_NAME=hirehive

# Google OAuth (Optional: for Social Login)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Running Locally

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to experience **HireHive**.

---

## 🔒 Authentication Architecture

HireHive implements **Better Auth**, an open-source, session-based authentication framework tailored for modern web applications:
- **Zero-Friction Sign-In**: Supports traditional email/password verification as well as instant Google OAuth login.
- **Role-Based Access Control**: Distinguishes between candidates and employer/recruiter accounts.
- **Security-First**: Enforces secure HTTP-only cookies, robust CSRF mitigation, and automatic token refreshes.

---

## 🗺️ Future Roadmap

- [ ] **AI-Powered Resume Matcher**: Automatic candidate-to-job compatibility scoring.
- [ ] **Real-Time In-App Messaging**: Instant messaging between candidates and hiring managers.
- [ ] **Video Interview Integration**: Integrated video meeting scheduling.
- [ ] **Salary Benchmark Calculator**: Real-time industry compensation comparisons.

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License & Author

Distributed under the **MIT License**. See `LICENSE` for more information.

Developed with ❤️ by **[Asmual Obaidul Hoque](https://github.com/Asmual)**.

<p align="center">
  <a href="https://github.com/Asmual">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>
