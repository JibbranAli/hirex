const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'technical@lwindia.com',
    pass: 'eohq wlwi dgbd svxk' // App password
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { fullName, companyName, designation, email, contact, interestedIn } = req.body;

    // Create email content
    const emailContent = `
New HIREX Interest Submission

Full Name: ${fullName}
Company Name: ${companyName}
Designation: ${designation}
Email: ${email}
Contact Number: ${contact}
Interested In: ${interestedIn === 'fulltime' ? 'Hiring Full Time' : 'Hiring Interns'}

This person has submitted their interest to hire validated, skilled tech talent at HIREX 2025.
    `.trim();

    // Email options
    const mailOptions = {
      from: 'technical@lwindia.com',
      to: 'technical@lwindia.com',
      subject: 'New HIREX Interest Submission',
      text: emailContent,
      html: `
        <h2>New HIREX Interest Submission</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contact}</p>
        <p><strong>Interested In:</strong> ${interestedIn === 'fulltime' ? 'Hiring Full Time' : 'Hiring Interns'}</p>
        <p>This person has submitted their interest to hire validated, skilled tech talent at HIREX 2025.</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 