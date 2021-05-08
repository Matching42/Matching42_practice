var express = require('express');
var opn = require('opn');
var app = express();
var port = process.env.PORT || 3000;

app.get('*', (req, res) => {
    res.end('Hello World!');
});

app.listen(port, () => {
    console.log('The server is running. \n'
    + `please open your browser at http://localhost:${port} \nif you want to stop press ctrl + c`);
    opn(`http://127.0.0.1:${port}`);
});

