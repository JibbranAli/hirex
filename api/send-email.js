const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

    // Email configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'technical@lwindia.com',
        pass: process.env.GMAIL_PASS || 'eohq wlwi dgbd svxk' // App password
      }
    });

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

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}; 