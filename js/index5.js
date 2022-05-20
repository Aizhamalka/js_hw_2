let userCard = prompt("Please type your bank card number!");
let cardLength = userCard.length;
let replacedNumber = cardLength - 4;
let putSymbol = "*";
let numberOfSymbol = putSymbol.repeat(replacedNumber);
let lastFourNumber = userCard.slice(replacedNumber);

console.log("Your card number is:" + numberOfSymbol + lastFourNumber);
