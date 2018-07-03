const NaturalLanguageUnderstandingV1 = require("watson-developer-cloud/natural-language-understanding/v1");

function watson(text) {
  const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version,
    url,
    username,
    password
  });

  const parameters = {
    text: text,
    features: {
      keywords: {
        emotion: true,
        sentiment: true,
        limit: 2
      }
    }
  };

  naturalLanguageUnderstanding.analyze(parameters, function(err, response) {
    if (err) console.log("error:", err);
    else console.log(JSON.stringify(response, null, 2));
  });
}

module.exports = watson;
