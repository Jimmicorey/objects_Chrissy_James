'use strict';

//Drill 1
const loaf = { 
  flour : 300, 
  water : 210, 
  hydration() {
    return loaf.water / loaf.flour * 100;
  }
};

console.log(loaf.flour);
console.log(loaf.water);

console.log(loaf.hydration());

//Drill 2
const drillObj = { foo : 1, bar : 2, fum : 3, quux : 4, spam : 5};
for (const property in drillObj) {
  console.log(`${property} : ${drillObj[property]}`);
}

//Drill 3
const mealsObject = { meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'] };

console.log(mealsObject.meals[3]);

//Drill 4 & 5
const careerOne = {name : 'Sam', career : 'Recruiter'};
const careerTwo = {name : 'Lake', career : 'Web Developer', boss : 'Sam'};
const careerThree = {name : 'Marc', career : 'Civil Engineer', boss : 'Sam'};
const careerFour = {name : 'Leyette', career : 'Teacher', boss : 'Sam'};

let careers = [careerOne, careerTwo, careerThree, careerFour];
function iterateCareers(careerArray) {
  for (let i = 0; i < careers.length; i++) {
    if (careers[i].boss) {
      console.log(`${careerArray[i].career} ${careerArray[i].name} reports to ${careerArray[i].boss}`);
    } else {
      console.log(`${careerArray[i].career} ${careerArray[i].name} doesn't report to anybody.`);
    }
  }
}

iterateCareers(careers);

//Drill 6
function decode(encodedPhrase) {
  let decodedMessage = '';
  const encoder = {
    a : 2,
    b : 3,
    c : 4,
    d : 5
  };
  for (let i = 0; i < encodedPhrase.length; i++) {
    if (encodedPhrase[i] in encoder === true && encodedPhrase[i] === 'a') {
      decodedMessage += encoder.a;
    } else if (encodedPhrase[i] in encoder === true && encodedPhrase[i] === 'b') {
      decodedMessage += encoder.b;
    } else if (encodedPhrase[i] in encoder === true && encodedPhrase[i] === 'c') {
      decodedMessage += encoder.c;
    } else if (encodedPhrase[i] in encoder === true && encodedPhrase[i] === 'd') {
      decodedMessage += encoder.d;
    } else {
      decodedMessage += ' ';
    }
  }
  console.log(decodedMessage);
}

decode('craft block argon meter bells brown croon droop');


