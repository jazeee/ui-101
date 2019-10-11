const {
  GOOGLE_URL,
  JAZEEE_URL,
} = require("./urls");
const fetch = require("node-fetch");

const doStuff = async () => {
  try {
    const response = await fetch(GOOGLE_URL);
    const result = await response.text();
    console.log("awaited", result.substring(0, 10));
  } catch (error) {
    console.error(error);
  }
  try {
    const response = await fetch(JAZEEE_URL);
    const result = await response.text();
    console.log("awaited", result.substring(0, 10));
  } catch (error) {
    console.error(error);
  }
};

doStuff();
