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
      console.log(`${careerArray[i].career} ${careerArray[i].name} doesn't report to anybody.`)
    }
  }
}

iterateCareers(careers);

//Drill 6

