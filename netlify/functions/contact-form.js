// netlify/functions/contact-form.js
exports.handler = async (event, context) => {
    // Ensure it's a POST request
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed'
      };
    }
  
    try {
      // Parse the incoming form data (assuming JSON payload)
      const data = JSON.parse(event.body);
  
      // Here you can process the data:
      // e.g., send an email, store in a database, or log the data.
      console.log('Received form data:', data);
  
      // Respond to the client
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form submitted successfully!' })
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error processing form data' })
      };
    }
  };
  