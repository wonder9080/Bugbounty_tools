const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const logFile = path.join(__dirname, 'requests.log');

// Middleware to log requests
app.use((req, res, next) => {
    const logEntry = JSON.stringify({
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.url,
        headers: req.headers,
        query: req.query
    }) + '\n';

    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error('Logging failed', err);
    });

    next();
});

// Your routes here
app.get('/', (req, res) => {
    res.send('Logging requests');
});

const PORT = process.env_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
