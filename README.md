# Hafiz Muhammad - Personal Online Quran Teacher

A modern, premium, highly professional personal branding website for an online Quran teacher, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Features

- **Modern Tech Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop viewports.
- **SEO Optimized**: Advanced SEO implementation with Next.js Metadata API, JSON-LD Structured Data (Organization, Person, Course, Breadcrumb, FAQ schemas), semantic HTML, and optimized performance.
- **Beautiful UI Components**: Custom-designed components with smooth Framer Motion animations.
- **Premium Aesthetics**: Professional color palette (teal, gold accents) emphasizing trust and elegance.
- **Form Validation**: Contact and booking forms built with React Hook Form and Zod.

## Project Structure

- `/app`: Next.js App Router containing pages, layouts, and global styles.
- `/app/components`: Reusable UI components (Navbar, Footer, CourseCard, TestimonialCard, etc.)
- `/app/data`: Static mock data powering the website (courses, testimonials, blog posts, FAQs).
- `/app/lib`: Utilities for metadata and structured data generation.

## Available Pages

- Home (`/`)
- About (`/about`)
- Courses (`/courses`)
- Testimonials (`/testimonials`)
- Blog (`/blog` and `/blog/[slug]`)
- Contact (`/contact`)
- Book Free Trial (`/book-trial`)

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Production Build**
   ```bash
   npm run build
   npm run start
   ```

## Design System

- **Primary**: `#0F766E` (Teal)
- **Secondary**: `#F8FAFC` (Slate/Gray)
- **Accent**: `#D4AF37` (Gold)
- **Text**: `#1E293B` (Dark Slate)
- **Background**: `#FFFFFF` (White)
- **Font**: Poppins (via `next/font/google`)

## License

This project is licensed under the MIT License.
