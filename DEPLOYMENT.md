# Deployment Guide

## Vercel Deployment

### Quick Deploy
```bash
vercel
```

### Environment Variables

Set these in your Vercel project settings:

```
NEXT_PUBLIC_SITE_NAME=Alex Alley Electrics
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
CONTACT_TO_EMAIL=your-email@example.com
```

### Build Warnings (Safe to Ignore)

The following npm warnings appear during deployment but **do not affect functionality**:

1. **@humanwhocodes/object-schema** - ESLint internal dependency, will be auto-updated
2. **glob@7.2.3** - Transitive dependency, no action needed
3. **three-mesh-bvh@0.7.8** - Used by @react-three/drei, doesn't affect our usage
4. **eslint@8.57.1** - Still supported by Next.js 14, works perfectly

These are **informational warnings** from npm about packages that are dependencies of dependencies. They don't cause any issues with the build or runtime.

## Deployment Checklist

- [ ] Create repository on GitHub (✅ Done: https://github.com/ArvinXO/AlleyPower)
- [ ] Push code to GitHub (✅ Done)
- [ ] Import project to Vercel
- [ ] Set environment variables
- [ ] Add custom domain (optional)
- [ ] Configure email service (Resend/SendGrid) for contact form
- [ ] Replace placeholder images in `/public`
- [ ] Update contact details in components
- [ ] Test on production URL

## Post-Deployment

### Update Contact Information

1. **Phone Number**: Update in `components/NavBar.tsx` and `app/page.tsx`
2. **Email**: Update in `app/page.tsx`
3. **Service Areas**: Update in `app/page.tsx`
4. **Business Hours**: Update in `app/page.tsx`

### Replace Assets

Upload your actual images to `/public`:
- `logo.svg` - Company logo
- `hero.jpg` - Hero section image (1200x800px recommended)
- `og-image.jpg` - Social sharing image (1200x630px)

### Enable Email

Install Resend for production email handling:
```bash
npm install resend
```

Update `app/api/contact/route.ts` with the Resend integration code (see README.md).

Add `RESEND_API_KEY` to Vercel environment variables.

## Performance Monitoring

After deployment, check:
- Lighthouse scores (should be 95+)
- Core Web Vitals in Vercel Analytics
- Security headers in browser DevTools
- Image optimization (AVIF/WebP formats)

## Troubleshooting

### Build Fails on Vercel

If build fails, check:
1. Node.js version (should be 18.x or 20.x)
2. Environment variables are set
3. Build logs for specific errors

### Images Not Loading

- Ensure images are in `/public` directory
- Check file names match exactly (case-sensitive)
- Verify image formats are supported

### Contact Form Not Working

- Check API route is deployed
- Verify email service is configured
- Check browser console for errors

## Support

For issues, check:
- Vercel deployment logs
- Browser console errors
- Next.js documentation: https://nextjs.org/docs

---

**Repository**: https://github.com/ArvinXO/AlleyPower
**Status**: Ready for deployment ✅
