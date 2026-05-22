const readline = require('readline-sync');

/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.


    function nameRole(name,role){                   //declaring function
        return "Name: " + name + ",  Role: " + role; 
    }
console.log(nameRole('Alice','Speaker'));      //assigning arguments && invoking function per assignment

//below lets user assign their own name and role to the above function
    let myName = readline.question("What is your name? ");
    let myRole = readline.question("And what is your role? ");

    console.log(nameRole(myName,myRole)); //uses custom answers given by the user to supply arguements to the function
// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.

    function ticketIncome(count){
        let tixCost = 20;
        let total = 0;

        for (i = 1; i <= count; i++){     
            if (i <= 100){                  // loop for first 100 attendees
                total = total + 20;
            }
        else if (count > 100){              //loop for overflow attendee adjusted ticket prices
                total = total + 18;
            }
        }
    return "Final ticket total: $" + total + ".00";

    }
console.log(ticketIncome(140));                                          //invoke function per assignment


    //below is a little extra
let incomePrediction = readline.question("How many people do you expect to attend this event? ");

console.log("Predicted " + ticketIncome(incomePrediction));              //Predicts income based on given attendace



// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.

function ifValidEmail(email){
    return email.includes("@")&&email.includes(".");   //checks if argument includes both the "@" and "." symbols & returns either true or false.
}

console.log(ifValidEmail("tnaes@yahoo.com")); //invokes function per assignment

//Below checks if user's email is valid and responds.
let userEmail = readline.question("Enter your email (Don't worry it's okay): ");

if(ifValidEmail(userEmail) === true){
    console.log("Your email is valid!!!");
}
else{
    console.log("Your email isn't even an email :/// \nTry again dood");
}



// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?
