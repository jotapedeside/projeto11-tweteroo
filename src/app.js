import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

let users = [];
let tweets = [];

/*app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});*/

app.post('/sign-up', (req, res) => {
  const data = req.body;
  if (data.username.length === 0 || data.avatar.length === 0) {
    res.sendStatus(400).json({status: 400, message: "Todos os campos são obrigatórios"});
  } else {
    users.push(data);
    res.status(201).json({ status: 201, message: "OK" });
  }
});

app.post('/tweets', (req, res) => {

  /*const profPic = users.find(e => e.username === req.body.username).avatar;
  const avatar = profPic ? profPic : "";
  tweets.push(newTweet);
  res.send(newTweet);
  const user = req.headers.user;
  const profPic = users.find(u => u.username === user);
  console.log("link da prof pic", profPic);
  console.log("find res", users.find(u => u.username === user));
  console.log("find res2", users.find(u => u.username === user).avatar);
  const avatar = profPic ? profPic.avatar : "oi";

  
  if (req.body.tweet.length !== 0 || profPic !== 0) {
    const newTweet = {
      ...req.body,
      asd,
    }
    tweets.push(newTweet)
    res.send(newTweet)
  } else {
    res.sendStatus(400).json({status: 400, message: "Todos os campos são obrigatórios"});
  }*/
  const profPic = users.find(user => user.username === req.body.username)
  
  if (req.body.tweet.length !== 0 || profPic !== 0) {
    const newTweet = {
      ...req.body,
      avatar: profPic.avatar,
    }
    tweets.push(newTweet)
    res.status(201).send(newTweet).json({ status: 201, message: "OK" })
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