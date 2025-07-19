# Direct Email Setup for HIREX Form

This solution sends emails directly to `technical@lwindia.com` without requiring any external accounts or services.

## Quick Setup

### 1. Start the Application

Run both the frontend and backend servers:

```bash
npm run dev:full
```

This will start:
- Frontend: http://localhost:5176 (or next available port)
- Backend: http://localhost:3001

### 2. Test the Form

1. Open the frontend URL in your browser (check the terminal output)
2. Scroll down to the "Submit your Interest" form
3. Fill out the form with test data
4. Click "Submit Interest"
5. Check your email at `technical@lwindia.com`

## How It Works

### Backend (server.cjs)
- Uses Node.js with Express
- Uses Nodemailer to send emails
- Configured with your Gmail credentials:
  - Email: `technical@lwindia.com`
  - App Password: `eohq wlwi dgbd svxk`

### Frontend (HirexInterestSection.tsx)
- Sends form data to local backend at `http://localhost:3001/api/send-email`
- Handles loading states and error messages
- Clears form on successful submission

## Email Configuration

The server is configured to send emails using:
- **Service:** Gmail
- **From:** technical@lwindia.com
- **To:** technical@lwindia.com
- **Subject:** "New HIREX Interest Submission"

## Email Content

Each email includes:
- Full Name
- Company Name
- Designation
- Email
- Contact Number
- Interested In (Full Time/Interns)

## Troubleshooting

### If emails are not received:
1. Check if the server is running on port 3001: `netstat -an | findstr :3001`
2. Verify Gmail app password is correct
3. Check spam folder
4. Ensure 2-factor authentication is enabled on Gmail

### If form submission fails:
1. Check browser console for errors
2. Verify both frontend and backend are running
3. Check server logs for email errors
4. Ensure the frontend is using the correct backend URL

### Common Issues:
- **CORS errors:** Backend includes CORS middleware
- **Authentication failed:** Verify Gmail app password
- **Port conflicts:** Change port in server.cjs if needed
- **Module errors:** Server uses CommonJS (.cjs extension)

## Testing

You can test the email functionality manually:

1. **Start the server:**
   ```bash
   node server.cjs
   ```

2. **Test with curl or browser:**
   ```bash
   curl -X POST http://localhost:3001/api/send-email \
     -H "Content-Type: application/json" \
     -d '{"fullName":"Test","companyName":"Test Co","designation":"HR","email":"test@example.com","contact":"1234567890","interestedIn":"fulltime"}'
   ```

## Production Deployment

For production, consider:
1. Using environment variables for email credentials
2. Adding rate limiting
3. Implementing form validation
4. Using HTTPS
5. Setting up proper error logging

## Security Notes

- The app password is currently hardcoded (not recommended for production)
- Consider using environment variables for sensitive data
- Implement proper validation and sanitization
- Add rate limiting to prevent spam

## Files Modified

- `server.cjs` - Backend email server (CommonJS)
- `src/HirexInterestSection.tsx` - Frontend form
- `package.json` - Added server scripts and dependencies

## Dependencies Added

- `express` - Web server framework
- `nodemailer` - Email sending library
- `cors` - Cross-origin resource sharing
- `concurrently` - Run multiple commands (dev dependency)

## Server Status

To check if the server is running:
```bash
netstat -an | findstr :3001
```

You should see:
```
TCP    0.0.0.0:3001           0.0.0.0:0              LISTENING
``` 