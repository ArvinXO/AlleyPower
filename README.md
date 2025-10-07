# Alex Alley Electrician — Next.js + TypeScript + Tailwind Starter

A production-ready starter for an electrician services website built with Next.js (App Router), TypeScript, Tailwind CSS, lucide-react, framer-motion, @react-three/fiber/@react-three/drei, and next-themes. Tuned for Vercel deployment with strong performance, caching, and security headers (including CSP). Includes a sleek, conversion-focused landing page for Alex Alley Electrics you can rename.

## 🚀 Quickstart

```bash
# 1) Install dependencies
npm install

# 2) Copy environment variables
cp .env.example .env.local
# Edit .env.local with your details

# 3) Run development server
npm run dev

# 4) Deploy to Vercel
# If you haven't: npm i -g vercel && vercel login
vercel
```

**Rename occurrences of Alex Alley to your brand as needed.**

## 📁 File Tree

```
.
├── app/
│  ├── api/
│  │  └── contact/route.ts
│  ├── fonts/
│  │  └── inter.ts
│  ├── globals.css
│  ├── layout.tsx
│  ├── page.tsx
│  └── sitemap.ts
├── components/
│  ├── ContactForm.tsx
│  ├── Hero.tsx
│  ├── IconBadge.tsx
│  ├── NavBar.tsx
│  ├── ServiceCard.tsx
│  ├── Services.tsx
│  ├── Testimonials.tsx
│  ├── ThemeToggle.tsx
│  └── ThreeBackground.tsx
├── lib/
│  ├── csp.ts
│  └── seo.ts
├── public/
│  ├── logo.svg
│  ├── og-image.jpg (add your own)
│  └── hero.jpg (add your own)
├── next.config.js
├── middleware.ts
├── tailwind.config.ts
├── tsconfig.json
└── .env.example
```

## 🎯 Core Technologies

- **Framework**: Next.js 14 (App Router with SSR)
- **Language**: TypeScript (.tsx files)
- **Styling**: Tailwind CSS (utility-first CSS framework)
- **3D Graphics**: React Three Fiber & Drei
- **Animations**: Framer Motion
- **Theme Management**: next-themes (dark/light mode)
- **Icons**: lucide-react

## ✨ Key Features

### Performance Optimizations
- **SWC Minification**: Ultra-fast compilation and minification
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Optimized bundle sizes with dead code elimination
- **Image Optimization**: Next.js Image component with AVIF/WebP support
- **CSS Optimization**: Optimized CSS with PostCSS and Autoprefixer

### Caching Strategy
- **Images** (SVG, JPG, PNG, WebP, AVIF): 1 year cache
- **Media** (WebM, MP4): 1 year cache
- **Assets** (JS, CSS, WOFF, WOFF2): 1 year cache

### Security Features
- **Content Security Policy (CSP)**: Enforced via middleware with per-request nonce
- **Console logs removed in production** (except errors)
- **Security Headers**:
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - Referrer-Policy: strict-origin-when-cross-origin
  - Permissions-Policy configured
  - Strict-Transport-Security (HSTS)
- `poweredByHeader` disabled

### Development Features
- TypeScript with strict mode
- ESLint for code quality
- Hot Module Replacement (HMR)
- Fast Refresh for instant feedback

## 📦 Installation & Scripts

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type check
npm run type-check
```

## 🎨 Components Overview

### NavBar
Sticky navigation with theme toggle, mobile menu, and call-to-action button.

### Hero
Eye-catching hero section with animated text and image, featuring call-to-action buttons.

### Services
Grid of service cards showcasing:
- Domestic Electrics
- EV Chargers
- Rewires & Upgrades
- Safety & Compliance

### Testimonials
Customer reviews section with responsive grid layout.

### ContactForm
Functional contact form with loading states and error handling. Connected to `/api/contact` route.

### ThreeBackground
Animated 3D background using React Three Fiber with a glowing sphere.

### ThemeToggle
Light/dark mode toggle with smooth transitions.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
NEXT_PUBLIC_SITE_NAME=Alex Alley Electrics
NEXT_PUBLIC_SITE_URL=https://alexalleyelectrics.co.uk
CONTACT_TO_EMAIL=you@example.com
```

### Branding To-Dos

1. **Replace Assets**:
   - `/public/logo.svg` - Your company logo
   - `/public/hero.jpg` - Hero section image (electrician at work)
   - `/public/og-image.jpg` - Social media sharing image (1200x630px)

2. **Update Contact Details**:
   - Phone number in `components/NavBar.tsx`
   - Email and contact info in `app/page.tsx`
   - Service areas and hours

3. **Customize Content**:
   - Update service descriptions in `components/Services.tsx`
   - Replace testimonials in `components/Testimonials.tsx`
   - Modify hero copy in `components/Hero.tsx`

## 📧 Email Handling (Production)

The contact form currently logs to console. For production, integrate with an email service:

### Option 1: Resend

```bash
npm i resend
```

Update `app/api/contact/route.ts`:

```typescript
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const to = process.env.CONTACT_TO_EMAIL!;

export async function POST(req: Request) {
  const { name, phone, message } = await req.json();
  await resend.emails.send({
    from: "Website <noreply@your-domain>",
    to,
    subject: `New enquiry from ${name}`,
    text: `Phone: ${phone}\n\n${message}`,
  });
  return NextResponse.json({ ok: true });
}
```

Add to `.env.local`:
```
RESEND_API_KEY=your_api_key_here
```

### Option 2: SendGrid, Mailgun, etc.

Similar integration pattern - install the SDK and update the API route.

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub/GitLab/Bitbucket
2. Import into Vercel
3. Set Environment Variables in project settings
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel login
vercel
```

### Environment Variables on Vercel

Set these in your Vercel project settings:
- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_SITE_URL`
- `CONTACT_TO_EMAIL`
- `RESEND_API_KEY` (if using Resend)

### Verify Deployment

Check these in production:
- Security headers (Content-Security-Policy, X-Frame-Options, etc.)
- Caching headers on static assets
- Image optimization (AVIF/WebP formats)
- Console logs removed (except errors)

## 🔒 Security Notes

- **CSP**: Enforced via `middleware.ts` with per-request nonce
- **Headers**: Set in `next.config.js` for baseline security
- **Console Logs**: Automatically removed in production (except errors)
- **Inline Scripts**: Avoided where possible; use nonce if needed

## 🎯 Future Enhancements

### Additional Pages
- `/services` - Detailed service pages
- `/about` - About the business
- `/areas-we-cover` - Service areas
- `/gallery` - Project photos
- `/blog` - SEO-friendly blog
- `/faq` - Frequently asked questions

### Features
- **Schema.org**: LocalBusiness + Service JSON-LD for SEO
- **Reviews**: Pull from Google/Trustpilot via API
- **Booking**: Slot picker integrated with Calendly or custom API
- **Analytics**: Plausible or Vercel Web Analytics
- **Live Chat**: Intercom, Crisp, or similar

### Performance
- Lazy load 3D components on scroll
- Implement ISR (Incremental Static Regeneration) for blog
- Add service worker for offline support

## 📊 Performance Metrics

Expected Lighthouse scores:
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🛠️ Troubleshooting

### Build Errors

If you encounter TypeScript errors:
```bash
npm run type-check
```

If you encounter CSS warnings about `@tailwind`:
- These are expected and harmless - PostCSS processes them during build

### Development Server Issues

Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

## 📝 License

Use freely for your electrician business. Replace images and branding. No attribution required.

---

**Built with ⚡ for Alex Alley Electrics**

For questions or support, contact the development team.
