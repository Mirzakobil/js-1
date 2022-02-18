const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
const test = [1,2,3,4,5,6,7,8,9,120];
let sum = 0;
let avr = 0;
for (let i = 1; i < prices.length; i++){
    sum = sum + prices[i]
}
avr = sum/prices.length;
console.log("Total is: ", sum, " Average price is: ", avr);
