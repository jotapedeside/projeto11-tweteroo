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
  console.log(data);
  console.log(data.username.length);
  if (data.username.length === 0 || data.avatar.length === 0) {
    //res.status(400).json({status: 400, message: "Todos os campos são obrigatórios"});
    res.status(400).send("Todos os campos são obrigatórios");
  } else {
    users.push(data);
    //res.status(201).json({ status: 201, message: "OK" });
    res.status(201).send("OK");
  }
});





app.listen(5000,
  () => {console.log("Magic happens at 5000")
});