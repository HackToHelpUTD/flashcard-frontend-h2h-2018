const express = require('express');
const app = express();
const path = require('path');
var https = require('https');

// This is a comment to test issues and PRs

// This is a comment to test issues and PRs

app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

/**
 * API ENDPOINTS
 */
app.get('/api/alltopics', (req, res) => {
  https.get('https://fcg-api.herokuapp.com/api/alltopics', (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    response.on('end', () => {
      console.log(JSON.parse(data));
      res.json(JSON.parse(data));
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

app.get('/api/topics', (req, res) => {
  var topic_arg = req.query.topic;

  https.get(`https://fcg-api.herokuapp.com/api/topics?topic=${topic_arg}`, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    response.on('end', () => {
      console.log(JSON.parse(data));
      res.json(JSON.parse(data));
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

app.get('/api/questions', (req, res) => {
  var { subtopic, type, difficulty } = req.query;

  https.get(`https://fcg-api.herokuapp.com/api/questions?subtopic=${subtopic}&type=${type}&difficulty=${difficulty}`, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    response.on('end', () => {
      console.log(JSON.parse(data));
      res.json(JSON.parse(data));
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

/**
 * Start the server
 */
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});