#! /usr/bin/env node

import inquirer from "inquirer";

let currencyRates = {
  "PKR" : {
    "USD" : 0.0036,
    "EUR" : 0.0033 ,
    "GBP" : 0.0030,
    "PKR" : 1
  },
  "USD" : {
    "PKR" : 280,
    "EUR" : 0.92,
    "GBP" : 0.79,
    "USD" : 1
  },
  "EUR" : {
    "PKR" : 301.80,
    "USD" : 1.09,
    "GBP" : 0.86,
    "EUR" : 1
  },
  "GBP" : {
    "PKR" : 350.12,
    "USD" : 1.26,
    "EUR" : 1.16,
    "GBP" : 1
  }
};
let loop : boolean = true;

while(loop){
const answers :{
    from: "PKR" | "USD" | "EUR" | "GBP",
    to: "PKR" | "USD" | "EUR" | "GBP",
    amount: number,
    moreConvert: boolean
} = await inquirer.prompt([
    {
        type: "input",
        name: "amount",
        message: "How much do you want to convert?",
    },
    {
        type: "list",
        name: "from",
        message: "What currency do you want to convert from?",
        choices: ["PKR", "USD", "EUR", "GBP"],
    },
    {
        type: "list",
        name: "to",
        message: "What currency do you want to convert to?",
        choices: ["PKR", "USD", "EUR", "GBB"],
    },
]);

const {amount, from, to} = answers;

if (amount && from && to){
    let result = amount * currencyRates[from][to];
    console.log("Successfuly Exchanged:", result, "Exchange Rate:", currencyRates[from][to]);
} else{
    console.log("Invalid Input");
};

const more = await inquirer.prompt([
    {
        type: "confirm",
        name: "moreConvert",
        message: "Do you want to convert another currency?",
        default: false
    }
])
loop = more.moreConvert
if (more.moreConvert === false) {
  console.log("Thank You");
  
}
};
