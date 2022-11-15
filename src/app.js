/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here



//   console.log("Hello Rigo from the console!");
// };
let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];

let pronounIndex = Math.floor(Math.random() * pronouns.length);
let adjIndex = Math.floor(Math.random() * adjs.length);
let nounIndex = Math.floor(Math.random() * nouns.length);

for (let pronounIndex of pronouns) {
  for (let adjIndex of adjs) {
    for (let nounIndex of nouns) {
      console.log(`${pronounIndex}${adjIndex}${nounIndex}.com`);
    }
  }
}