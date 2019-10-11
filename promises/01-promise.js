const {
  GOOGLE_URL,
  JAZEEE_URL,
} = require("./urls");

const fetch = require("node-fetch");

fetch(GOOGLE_URL)
  .then(result => result.text())
  .then((out) => console.log("Fetched 1", out.substring(0, 10)) || out)
  .then((out) => console.log("Fetched 2", undefined.substring(0, 10)) || out)
  .then((out) => console.log("Fetched 3", out.substring(0, 10)))
  .catch((...args) => console.error("I am here", ...args))
  .then(() => {
    return fetch(JAZEEE_URL)
  })
  .then(result => result.text())
  .then((out) => console.log("Fetched", out.substring(0, 10)))
  .catch(console.error);
