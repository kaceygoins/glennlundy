# Glenn Lundy / 800% Life Website

Next.js website for Glenn Lundy's 800% Life brand.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

This site is configured for Vercel deployment. Connect this repo to Vercel and it will auto-deploy on push to main.

## Structure

- `/src/app/page.jsx` - Homepage
- `/src/app/morning-5/page.jsx` - Morning 5 Planner page
- `/src/components/` - Shared components (Footer, ScrollIndicator)

## Adding New Pages

1. Create a new folder in `/src/app/` with the route name
2. Add a `page.jsx` file inside
3. Import shared components as needed
4. Update internal links to use relative paths (e.g., `/life` instead of `https://800percent.life/life`)