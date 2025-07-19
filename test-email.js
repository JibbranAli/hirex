// Test script for email functionality
const testData = {
  fullName: "Test User",
  companyName: "Test Company", 
  designation: "HR Manager",
  email: "test@example.com",
  contact: "1234567890",
  interestedIn: "fulltime"
};

fetch('http://localhost:3001/api/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData)
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
}); 