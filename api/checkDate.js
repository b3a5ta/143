// api/checkDate.js

export default function handler(request, response) {
  // Ensure this is a POST request
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  // Get the secret date from your Vercel Environment Variables
  const correctDate = process.env.BIRTHDAY_SECRET;

  // Get the date the user submitted from the request body
  const { date } = request.body;

  // Check if the submitted date is correct
  if (date === correctDate) {
    // If correct, send a success response
    response.status(200).json({ success: true });
  } else {
    // If incorrect, send an unauthorized error
    response.status(401).json({ success: false });
  }
}
