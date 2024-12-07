import express from 'express'; 
import app from '../server';

// Middleware to parse JSON data from incoming requests
app.use(express.json());  // POST requests as JSON

// Serve static files (e.g., index.html) change path to index in the root folder
app.use(express.static('public'));

// Serve the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// API handle form submission
app.post('/api', (req, res) => {
    const { input } = req.body;

    if (!input) {
        return res.status(400).json({ message: 'I need any name' });
    }

    // Send the message back
    res.json({ message: `Hello ${input}` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export default app; 
