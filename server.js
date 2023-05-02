const express = require('express');
require('dotenv').config();
const studentRoutes = require('./src/student/routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the home page.');
});

app.use('/api/v1/students', studentRoutes);

app.listen(port, () => {
    console.log(`Ctrl + click: http://localhost:${port}`);
});
