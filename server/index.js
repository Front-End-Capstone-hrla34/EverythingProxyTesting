const express = require('express');
const path = require('path');
const morgan = require('morgan');
var port = process.env.PORT || 8000;
var cors = require('cors');
var bodyParser = require('body-parser')
var request = require('request');
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, '../client/dist/')));
app.get('/:id', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
 
})
app.get('/api/:id', function(req,res) {
    //modify the url in any way you want
    var newUrl = 'http://localhost:3001/api/';
    request.get(newUrl + req.params.id).pipe(res);

});
app.get('/trips/hi', function(req,res) {
    //modify the url in any way you want
    var newUrl = 'http://localhost:3000/trips/hi';
    
    request.get(newUrl).pipe(res);
});
app.get('/trips/:id', function(req,res) {
    //modify the url in any way you want
    var newurl = 'http://localhost:3000/trips/';
    request.get(newurl + req.params.id).pipe(res);
   
});


app.get('/api/trips/get', function(req,res) {
    //modify the url in any way you want
    var newUrl = 'http://localhost:3003/api/trips/get';
    request(newUrl).pipe(res);
});

app.get('/api/trips/:id', function(req,res) {
    //modify the url in any way you want
    var newurl = 'http://localhost:3003/api/trips/';
    request.get(newurl + req.params.id).pipe(res);
});

app.get('/api/calendar/:id', function(req,res) {
    //modify the url in any way you want
    var fullUrl = 'http://localhost:3002/api/calendar/';
    request.get(fullUrl + req.params.id).pipe(res);
});

app.use('/api/quote', function(req,res) {
    //modify the url in any way you want
    var newurl = '';
    var url = 'http://localhost:3002/'+ req.url;
    var r = null;ss
    if(req.method === 'POST') {
       r = request.post({uri: url, json: req.body});
    } else {
       r = request(url);
    }s
  
    req.pipe(r).pipe(res);
  });
// app.all('/trips', (req, res) => res.redirect(`http://localhost:3000${req.path}`));
// app.get('/*', (req, res) => res.redirect('http://localhost:8000'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))





// app.all('/api/restaurant/info/*', (req, res) => res.redirect(`http://zagat-info2.us-west-1.elasticbeanstalk.com${req.path}`));
// app.all('/api/restaurant/suggestions/*', (req, res) => res.redirect(`http://zagat-suggestions-dev.us-west-1.elasticbeanstalk.com${req.path}`));
// app.all('/api/restaurant/carousel/*', (req, res) => res.redirect(`http://carousel-dev6.us-west-1.elasticbeanstalk.com${req.path}`));
// app.all('/api/restaurant/recommendations/*', (req, res) => res.redirect(`http://rec-public-dev.us-west-1.elasticbeanstalk.com${req.path}`));
