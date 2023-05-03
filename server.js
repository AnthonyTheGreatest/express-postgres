const express = require('express');
require('dotenv').config();
const studentRouter = require('./routes/student');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the home page.');
});

app.use('/students', studentRouter);

app.listen(port, () => {
    console.log(`(Ctrl + click) http://localhost:${port}`);
});
