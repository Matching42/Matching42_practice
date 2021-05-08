var express = require('express');
var app = express();
var port = 3000;

app.get('/name/:user_name', function(req, res){
    res.status(200);
    res.set('Content-type', 'test/html');
    res.end('<html><body>' +
        '<h1>Hello ' + req.params.user_name + '</h1>' +
    '</body></html>'
    );
});

app.get('*', function(req, res){
    res.end('Heelo World');
});

app.listen(port, function(){
    console.log('The server is running. \n'
    + 'please open your browser at http://localhost:${port} \nif you want to stop press ctrl + c');
    opn('http://127.0.0.1:${port}');
});

