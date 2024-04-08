#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
const  myPin = 1234;

let enterpin = 3456

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pincode",
            message: "enter your pin",
            type: "number"
        }
    ]
);

if (pinAnswer.pincode === myPin) {
    console.log("Pin code accepted. Access granted");
    console.log("welcome to your account");

    let operationAnswer = await inquirer.prompt(

        [
            {
                name: "operation",
                message: "please select your opetion",
                type: "list",
                choices: ["withdraw", "check balance", "fast cash"]
            }
        ]
    );

    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "number",
                    message: "please enter your amount",
                }
            ]   
        );
        
        if (amountAnswer.amount > myBalance) {
        console.log("you have insuficient amount in your account because");
        } else 
        myBalance -= amountAnswer.amount
        console.log("your remaining balance is " +myBalance); 
        
    }  else if (operationAnswer.operation === "check balance") {
    console.log("your account balance is " +myBalance)
    }

    else if (operationAnswer.operation === "fast cash") {
        let cashAmount = await inquirer.prompt(
            [
                {
                    name: "fastcash",
                    type: "list",
                    message: "please select your desired amount you want to withdraw",
                    choices: ["1000", "2000", "3000","5000"]
                }
            ]
        )
        myBalance -= cashAmount.fastcash
        console.log("your remaining balance " +myBalance);
    }  
    
} else {
        console.log("you have entered the incorrect pin code");
    } 
