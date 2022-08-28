import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

let users = [];
let tweets = [];

app.post('/sign-up', (req, res) => {
  const data = req.body;
  if (data.username.length !== 0 || data.avatar.length !== 0) {
    users.push(data);
    res.status(201).send("OK").json({ status: 201, message: "OK" });
  } else {
    res.sendStatus(400).json({status: 400, message: "Todos os campos são obrigatórios"});
  }
});

app.post('/tweets', (req, res) => {
  const profPic = users.find(user => user.username === req.body.username);
  
  if (req.body.tweet.length !== 0 || profPic !== 0) {
    const newTweet = {
      ...req.body,
      avatar: profPic.avatar
    }
    tweets.push(newTweet)
    res.status(201).send(newTweet).json({ status: 201, message: "OK" });
  } else {
    res.sendStatus(400).json({status: 400, message: "Todos os campos são obrigatórios"});
  }
});

app.get('/tweets', (req, res) => {
    console.log(req);
    const latestTweets = [];
    for (let i = 0; i < tweets.length; i++) {
      latestTweets.push(tweets[i]);
    }
    res.status(200).send(latestTweets);
});

app.listen(5000,
  () => {console.log("Magic happens at 5000")
});