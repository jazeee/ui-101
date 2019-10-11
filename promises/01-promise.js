const {
  GOOGLE_URL,
  JAZEEE_URL,
} = require("./urls");

const fetch = require("node-fetch");

fetch(GOOGLE_URL)
  .then(result => result.text())
  .then((out) => console.log("Fetched", out.substring(0, 10)))
  .catch(console.error)
  .then(() => {
    return fetch(JAZEEE_URL)
  })
  .then(result => result.text())
  .then((out) => console.log("Fetched", out.substring(0, 10)))
  .catch(console.error);
