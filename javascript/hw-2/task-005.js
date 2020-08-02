"use strict";
const checkForSpam = function (message) {
  const messageLower = message.toLowerCase();
  let search = messageLower.includes("spam") || messageLower.includes("sale");
  return search;
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));