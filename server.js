const express = require('express');
const PORT = process.env.PORT || '3000';
const app = express();

// Middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes.
app.get('/', (request, response) => {
    const jresponse = { 'name': 'Marcos', 'doing': 'Coding' };
    response.status(200).json(jresponse);
});

// Start Listening.
app.listen(PORT, () => {
    console.log(`Listening for request on port ${PORT}`);
});
