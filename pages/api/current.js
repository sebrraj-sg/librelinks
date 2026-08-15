// pages/api/current.js
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Replace with real session/auth check & database query
    const currentUser = {
      id: "usr_123",
      email: "user@example.com",
      name: "John Doe",
    };

    return res.status(200).json(currentUser);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}