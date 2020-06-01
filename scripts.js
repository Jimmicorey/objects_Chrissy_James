/* eslint-disable no-console */
/* eslint-disable strict */
/*
// ---1. Object initializers and methods
const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water/this.flour)*100;
  }
};
console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());
*/


/*
// ---2. Iterating over an object's properties
const randomStuff = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
  spam: 5
};
for (let key in randomStuff) {
  console.log(`${key} : ${randomStuff[key]}`);
}
*/


/*
// ---3. Arrays in objects
const hobbits = {
  meals: [
    'breakfast', 
    'second breakfast', 
    'elevenses', 
    'lunch', 
    'afternoon tea', 
    'dinner', 
    'supper'
  ]
};
console.log(`A hobbit's fourth meal of the day is ${hobbits.meals[3]}.`);
*/

/*
// ---4. Arrays of objects
const peopleOfDC = [
  {
    name: 'Alfred', 
    jobTitle: 'butler'
  }, 

  {
    name: 'Bruce', 
    jobTitle: 'coporate executive'
  }, 

  {
    name: 'Diana', 
    jobTitle: 'curator'
  }, 

  {
    name: 'Lois', 
    jobTitle: 'senior journalist'
  }, 

  {
    name: 'Clark', 
    jobTitle: 'junior journalist'
  }
];
peopleOfDC.forEach(function (person) {
  console.log(`${person.name} is a ${person.jobTitle}`);
});
*/


/*
// ---5. Properties that aren't there
const peopleOfDC = [
  {
    name: 'Alfred', 
    jobTitle: 'butler',
    boss: 'Bruce Wayne'
  }, 
  
  {
    name: 'Bruce', 
    jobTitle: 'coporate executive',
    boss: null
  }, 
  
  {
    name: 'Diana', 
    jobTitle: 'curator',
    boss: null
  }, 
  
  {
    name: 'Lois', 
    jobTitle: 'senior journalist',
    boss: 'Perry White'
  }, 
  
  {
    name: 'Clark', 
    jobTitle: 'junior journalist',
    boss: 'Lois Lane'
  }
];
peopleOfDC.forEach(function (person) {
  if (person.boss === null) {
    console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
  } else {
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
  }
});
*/




//***<<<--- 6. Cracking the code --->>>****
//the prio-drill that is referenced in this one was never made avaiable to me due to my taking part in the older prep-course and not the revamped new prep-course material.





//***<<<--- 7. Factory Functions with LOTR --->>>****
// will add my code from a separate .js file... this one's getting a bit long-winded LOL