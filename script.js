"use strict"; 

//name (string)
let fullName = "Leslie Gilbert";

//age (number)
let age = "33";

//birthday (string)
let birthday = "May 2";

//detroitGC (boolean) - choose either true or false
let detroitGC = true;

//lifeEvents (array with 4 items. 4 important life events)
let lifeEvents = ["I was born in Fort Myers, FL", "I went to Ferris State and IADT", "I was an EMT for 9 years", "I have a daughter, Savannah, who is 9"]

// if/else 
if(detroitGC === true) {
    console.log(`My name is ${fullName} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`)
} else {
    console.log(`My name is ${fullName} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`)
}

// for loop
for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;

while(true) {
    let randomNumber = Math.floor(Math.random() * 11);
    if(randomNumber!== 5) {
        counter++,
        console.log(`${randomNumber} !==5`);
    } else {
        counter++;
        console.log(`5 === 5. It took ${counter} interations to randomly generate the number 5.`)
        break;
    }
    
}

