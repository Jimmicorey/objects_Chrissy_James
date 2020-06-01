'use strict';

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

