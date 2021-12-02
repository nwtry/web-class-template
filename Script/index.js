// alert("hey there!");
console.log ("I HATE THE TERM : Hello World");

// Variables

let firstname = "Aanya";
console.log (firstname);
let lastname = "Jain";
console.log (lastname);
console.log (firstname + " " + lastname);

// Concatenate
console.log ("My name is " + firstname + " " + lastname);
let classnumber = 6;
let classname = "Web design part 6";

// new Concatenate

console.log(`My name is ${firstname} ${lastname}.`);

// Constants
const idnumber = 64827284382;

// Getting Elements
const header =  document.querySelector("header");
console.log(header);
const links = document.querySelectorAll(".nav-link");
console.log(links);

// Arrays (Lists)
const navButtonOne = links[0];
console.log(navButtonOne);
let studentNames = ["ABCD", "EFGH", "IJKL", "MNOP", "QRST", "UVWX"];
console.log(studentNames);
let student2 = studentNames[0];
console.log(student2);

// Older javascript will see us using var instead of let
// Don't use it anymore

// Length
let numberOfStudents = studentNames.length;
console.log(numberOfStudents);

// Change our HTML
/* const h1 = document.querySelector("h1");
 h1.innerHTML = "Nyima And David's Taco Table"; */

const ctaButton = document.querySelector(".cta-button");
ctaButton.innerHTML = `Make A Reservation Here`;

// Adding and removing classes
// Change CSS using JavaScript


const ctaHeader = document.querySelector (".cta-header");
ctaHeader.classList.remove("red-font"); 
// classList does not work with periods "." 
// ctaHeader.classList.toggle("red-font");

// Functions
function redToggle ()   {
    ctaHeader.classList.toggle("red-font");
}

// event listeners
ctaHeader.addEventListener("click", redToggle)

// functions with loops
// if loops
// this function will give the correct greeting based on the time of day
function sayHello ()    {
    let currentTime = 20;
    if(currentTime < 12)    {
        console.log("Good Morning");
    } else if(currentTime < 18) {
        console.log("Good Afternoon");
    } else {
        console.log("Good Night")
    }

}

// while loops

// console.log (`1 x ${multiplier} = ${multiplier*1}`);
// console.log (`2 x ${multiplier} = ${multiplier*2}`);

function multiTable()  {
    let multiplier = 5;
    let counter = 1;

    while(counter <= 20) {
        console.log(`${counter} x ${multiplier} = ${counter*multiplier}`);
        counter = counter + 1;
    }
    
}

// for loops

function multiTableFor()    {
    let multiplier = 6;
    for(let counter = 1; counter <= 20; counter++)  {
        console.log(`${counter} x ${multiplier} = 
        ${counter*multiplier}`);
    }
}
