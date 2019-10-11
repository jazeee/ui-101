const {
  GOOGLE_URL,
  JAZEEE_URL,
} = require("./urls");

// Emulate callback pain
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
function xhr(url, callback) {
  if (!url) {
    callback(new Error("Bad URL"));
    return;
  }
  const resultFromUrl = url + "____abc";
  callback(null, resultFromUrl);
}

xhr(undefined, function(error, result){
  if (error) {
    console.error(error);
    return;
  }
  console.log(result);
});

xhr(GOOGLE_URL, function(error, result) {
  console.log(result);
  xhr(JAZEEE_URL, function(error, jazResult) {
    console.log(jazResult);
  });
});
