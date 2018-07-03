const Twit = require("twit");

const T = new Twit({
  consumer_key,
  consumer_secret,
  app_only_auth
});

const getTweets = (user, cb) => {
  const tweetList = [];
  T.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${user}&count=10`
  )
    .then(resp => {
      const tweets = resp.data;

      for (let tweet of tweets) {
        tweetList.push(tweet.text);
      }
      return cb(tweetList);
    })
    .catch(err => console.log(err));
};

module.exports = getTweets;
