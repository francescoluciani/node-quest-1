const information = require("./information.js");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hi! My name is ${information.name} and I am part of the ${information.campus} crew!`,
    e: "oO",
    T: "U ",
  })
);
