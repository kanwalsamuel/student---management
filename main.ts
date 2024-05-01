#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.italic.bold.redBright("***WELCOME***"))
const randomNumber:number= Math.floor(10000 +Math.random()*90000)
 let myBalance:number=0
 let annswer = await inquirer.prompt
 (
    [
        {
            name:"students",
            type:"input",
            message:"Enter student name",
            validate:function(value){
                if(value.trim() !==""){
                    return true;
            }
        
            return "please select a non empty value";
            }    
        },

        {

            name:"courses",
            type:"list",
            message:"select the course to enrolled",
            choices:["Amazon acount management","Fiver acount managemnt","Etsy","Ebey"] 
      }
      
    ]
 );
 const tutionFees:{[key:string]:number} =  {
    "Amazon acount management": 25000,
    "Fiver acount managemnt": 22000,
    "Etsy acount managemnt":21000,
    "Ebey acount managemnt":20000,
    
 };
    console.log(`\ntution Fees:${tutionFees[annswer.courses]} pkr`)
    console.log(`myBalance:${myBalance}\n`);


    let paymentMethod = await inquirer.prompt
 (
    [
    
        {
            name:"payment",
            type:"list",
            message:"Select your payment option",
            choices:["JazzCash","EasyPaisa","BankTransfer"]

        },
        {
            name:"amount",
            type:"input",
            message:"Payment transfer",
            validate:function(value){
                if(value.trim() !==""){
                    return true;
                }
        
                return "please select a non empty value";
            },
        
        }
        
    ]    )

    console.log(`\nYou select payment method ${paymentMethod.payment}`)

    const tutionfee = tutionFees[annswer.courses];
    const paymentFees = parseFloat(paymentMethod.amount)
    if (tutionfee === paymentFees){
        console.log(`Congratulation,you have succesfully enrolled in ${annswer.courses}. \n`);
    let ans = await inquirer.prompt(
        [{
            name: "select",
            Message:"what would do you like to do next?",
            type:"list",
            choices:["View status","Exit"]

        }
    ]
    )
    if(ans.select === "View status"){
console.log(chalk.greenBright("\n******Staus******\n"));
console.log(`Student name: ${annswer.students}`);
console.log(`Student iD: ${randomNumber}`) ;
console.log(`Course: ${annswer.courses}`);
console.log(`Tution Fees Paid: ${paymentFees}`);
console.log(`Mybalance: ${myBalance += paymentFees}`);

    }else{
        console.log(`Exiting Student Management System`);
    }


    }else{
      console.log("Invalid amount")
    }  ;            
 