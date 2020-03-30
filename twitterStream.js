const express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    server = require('http').createServer(app),
    Twit = require('twit'),
    io 	= require('socket.io')(server);

const twitter = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000
});

const stream = twitter.stream('statuses/filter', { track: '#covid-19', language: 'en' });


app.get('/', function(req, res) {
    stream.on('tweet', function (tweet) {
        const data = {
            'name': tweet.user.name,
            'screen_name': tweet.user.screen_name,
            'text': tweet.text,
            'avatar': tweet.user.profile_image_url
        };
        console.log(data)
    });
    return res.send({});
});



module.exports = app;
