const express = require('express');
const app = express();

const env = require('dotenv')
env.config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Juice');
});

app.listen(3000, () => {
    console.log(`server is running at port ${PORT}`);
});