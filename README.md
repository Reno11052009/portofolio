# Reno's Personal Portfolio

A modern, responsive, and interactive portfolio web application mimicking a desktop/window interface on desktop screen sizes, and a single-page scrolling layout on mobile devices.

🌐 **Live Demo:** [renoreno.my.id](https://renoreno.my.id)

---

## 🚀 Features

- **Interactive Desktop Interface**: Drag, resize, and minimize window components just like a real OS desktop.
- **Responsive Mobile Layout**: Automatically transitions to a smooth-scrolling linear layout on mobile and tablet devices.
- **Custom Loading Screen**: Interactive particles canvas and a smooth, theme-aware loading indicator using `react-loading-indicators` (Commet).
- **Floating Dock**: A sleek macOS-style dock menu for navigating across sections (About, Projects, Contact).
- **Contact Form**: Direct email sending functionality via API integration.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [@tabler/icons-react](https://tabler.io/icons)
- **Email Dispatch**: [Nodemailer](https://nodemailer.com/)

---

## 📦 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/Reno11052009/portofolio.git
cd portofolio
npm install --legacy-peer-deps
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory based on the `.env.example` template:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECEIVER=receiver-email@gmail.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🛠️ Development & Deployment

The application is deployed and accessible at [renoreno.my.id](https://renoreno.my.id).
