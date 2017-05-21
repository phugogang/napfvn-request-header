var express = require('express');
var app = express();

app.enable('trust proxy');

app.get('/', (req, res) => {
    res.redirect('/api/whoami');
})

app.get('/api/whoami', (req, res) => {
    var ip = (req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress)

     var header = {
         ipaddress: ip,
         language: req.headers['accept-language'].split(',')[0],
         software: req.headers['user-agent'].split('(')[1].split(')')[0]
     }


    res.json(header);
});


app.listen(process.env.PORT || 8000, () => {
    console.log('Listenning 3000 port');
})