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


const doPromise = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(5), 1000);
  });
  const result = await promise;
  console.log("Here I am", result);
  return "I am done";
};

const doPromiseAsAPromise = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(5), 1000);
  });
  return promise.then((result) => {
    console.log("Here I am", result);
    return "I am done 2";
  });
}

const thisIsAPromise = doPromise();
const thisIsAPromiseAgain = doPromiseAsAPromise();

thisIsAPromise.then(console.log);
thisIsAPromiseAgain.then(console.log);
