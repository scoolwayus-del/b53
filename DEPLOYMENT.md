# Hostinger Deployment Guide

This website is now fully configured for deployment on Hostinger as a static React SPA.

## What's Been Done

1. ✅ Removed all Supabase/database environment variables
2. ✅ Configured `vite.config.js` with `base: './'` for relative paths
3. ✅ Added `.htaccess` file for React Router support
4. ✅ Verified build process works correctly
5. ✅ All assets are properly bundled in `dist/` folder

## Deployment Steps

### 1. Build the Project

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 2. Upload to Hostinger

1. Log into your Hostinger control panel
2. Navigate to **File Manager**
3. Go to the `public_html/` directory (or your domain's root directory)
4. **Delete all existing files** in `public_html/`
5. **Upload all contents** from the `dist/` folder:
   - All files including `.htaccess`
   - The `assets/` folder
   - The `fonts/` folder
   - All video and image files

### 3. Verify File Structure

After upload, your `public_html/` should look like:

```
public_html/
├── .htaccess
├── index.html
├── vite.svg
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other chunks]
├── fonts/
│   └── [font files]
├── logo.png
├── video.mp4
├── video.webm
└── [other media files]
```

### 4. Test Your Deployment

1. Visit your domain (e.g., `https://yourdomain.com`)
2. Test all routes:
   - Home page: `/`
   - Projects: `/projects`
   - Contact: `/contact`
   - Affiliate: `/affiliate`
   - Privacy: `/privacy`
   - Terms: `/terms`
3. Verify videos and images load correctly
4. Test form submissions (currently logs to console)

## Important Notes

### React Router Support

The `.htaccess` file ensures all routes redirect to `index.html`, allowing client-side routing to work correctly. This is essential for React Router.

### Form Submissions

The video inquiry form currently logs data to the browser console. Since there's no backend:

- Form validation works client-side
- Data is not stored anywhere
- To capture form submissions, you'll need to add:
  - Email service (e.g., EmailJS, Formspree)
  - Or restore Supabase integration

### Asset Loading

All assets use relative paths (`./*`) and will work regardless of:
- Domain name
- Subdirectory installation
- HTTP vs HTTPS

### No Environment Variables Needed

This is a pure static site with no server-side dependencies or API calls requiring authentication.

## Troubleshooting

### Routes Return 404

- Verify `.htaccess` file is present in root directory
- Check that Apache mod_rewrite is enabled (usually enabled by default on Hostinger)

### Images/Videos Not Loading

- Verify all files from `dist/` were uploaded
- Check browser console for 404 errors
- Ensure file names match exactly (case-sensitive)

### Blank Page

- Check browser console for JavaScript errors
- Verify `index.html` and all `assets/*.js` files uploaded correctly
- Clear browser cache and try again

## Re-deployment

To update the site:

1. Make changes to source code
2. Run `npm run build`
3. Upload new `dist/` contents to `public_html/`
4. Clear browser cache to see changes

## Performance Optimization

Already configured:
- ✅ Code splitting for faster loads
- ✅ CSS and JS minification
- ✅ Gzip compression support
- ✅ Font preloading
- ✅ Video preloading

## Support

For Hostinger-specific issues:
- Contact Hostinger support
- Check their documentation on static site hosting
- Verify Apache settings if `.htaccess` isn't working
