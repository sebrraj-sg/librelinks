// pages/api/register.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password, name } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    // 1. Hash password
    // 2. Save user record to Database
    
    return res.status(201).json({ 
      message: 'User registered successfully', 
      user: { email, name } 
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to register user' });
  }
}