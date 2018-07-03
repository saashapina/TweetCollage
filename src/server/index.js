const express = require("express");
const path = require("path");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const cors = require("cors");
const getTweets = require("./external_api/get-tweets");
const mongoose = require("mongoose");
const watson = require("./external_api/watsonNatLangUnderstanding");
const PORT = process.env.PORT || 8000;
const Collage = require('./model/CollageSchema')

if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${
        worker.process.pid
      } exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();
  app.use(express.json());
  app.use(cors());

  /*  ****** Twitter function ****** */

  // start of tweets
  app.post("/api/tweets", (req, res) => {
    const { user } = req.body;
    if (typeof user !== "string") res.status(400).json;

    getTweets(user, gimmeTweets);

    mongoose.connect('mongodb://tweetCollage:Tweetsi3@ds125851.mlab.com:25851/may', {useMongoClient: true});

    const twit = tweets.map(tweet => watson(tweet));
    res.json(twit);
  });
  // serving directory for hosting/deploy

  app.use(express.static(path.resolve(__dirname, "../../dist")));

  app.listen(PORT, function() {
    console.error(`Cluster ${process.pid} is listening on port ${PORT}`);
  });
}

function gimmeTweets(tweets) {
  tweets.map(tweet => console.log(watson(tweet)));
}
