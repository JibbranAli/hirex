# Vercel Deployment Guide for HIREX Website

This guide will help you deploy the HIREX website to Vercel with full functionality, including the email form.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub
3. **Gmail App Password**: Ensure your Gmail app password is working

## Deployment Steps

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select the repository containing this project

### 2. Configure Build Settings

Vercel will automatically detect this is a Vite project, but verify these settings:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Environment Variables (Important!)

Add these environment variables in your Vercel project settings:

```
GMAIL_USER=technical@lwindia.com
GMAIL_PASS=eohq wlwi dgbd svxk
```

**Steps to add environment variables:**
1. Go to your Vercel project dashboard
2. Click "Settings" tab
3. Click "Environment Variables"
4. Add the variables above

### 4. Deploy

1. Click "Deploy"
2. Wait for the build to complete
3. Your site will be live at `https://your-project-name.vercel.app`

## File Structure for Vercel

```
project/
├── api/
│   └── send-email.js          # Vercel serverless function
├── src/
│   ├── components/            # React components
│   └── ...
├── public/
│   └── assets/               # Static assets
├── vercel.json              # Vercel configuration
├── package.json
└── vite.config.ts
```

## How It Works

### Frontend (React + Vite)
- ✅ Static files served by Vercel
- ✅ Form submits to `/api/send-email`
- ✅ All components work as expected

### Backend (Serverless Function)
- ✅ `/api/send-email.js` handles email sending
- ✅ Uses nodemailer with Gmail
- ✅ CORS enabled for cross-origin requests
- ✅ Error handling and logging

### Email Functionality
- ✅ Form data sent to `technical@lwindia.com`
- ✅ All form fields included in email
- ✅ Success/error messages displayed
- ✅ Loading states work properly

## Testing After Deployment

1. **Test the Form**:
   - Fill out the interest form
   - Submit and check for success message
   - Verify email is received at `technical@lwindia.com`

2. **Test All Components**:
   - Hero section
   - What is HIREX section
   - Student cards with real data
   - Skills and roles section
   - All navigation and links

3. **Test Responsive Design**:
   - Mobile view
   - Tablet view
   - Desktop view

## Troubleshooting

### If Email Form Doesn't Work:
1. Check environment variables are set correctly
2. Verify Gmail app password is valid
3. Check Vercel function logs for errors
4. Test the API endpoint directly

### If Build Fails:
1. Check all dependencies are in package.json
2. Verify TypeScript compilation
3. Check for any import errors

### If Images Don't Load:
1. Ensure all images are in `public/assets/`
2. Check image paths are correct
3. Verify file permissions

## Production Checklist

Before going live:
- [ ] Environment variables set in Vercel
- [ ] Email form tested and working
- [ ] All images loading correctly
- [ ] Student data updated with real information
- [ ] All links working (GitHub, LinkedIn, Portfolio)
- [ ] Responsive design tested
- [ ] Performance optimized

## Custom Domain (Optional)

1. Go to Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

## Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Function Logs**: Check API function performance
- **Email Logs**: Monitor email delivery success

## Security Notes

- ✅ Environment variables keep credentials secure
- ✅ CORS properly configured
- ✅ Input validation on form
- ✅ Rate limiting recommended for production

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Test locally with `npm run dev`
3. Verify all dependencies are installed
4. Check browser console for errors

The website is now ready for production deployment on Vercel! 🚀 