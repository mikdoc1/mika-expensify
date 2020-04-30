const path = require('path');
const express = require('express');
const app = express();

const public = path.join(__dirname, 'build');
app.use(express.static(public));

app.get('*', (req, res) => {
    res.sendFile(path.join(public, 'index.html'))
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is up!')
});