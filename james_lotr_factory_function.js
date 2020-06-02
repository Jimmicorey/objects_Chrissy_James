/* eslint-disable strict */
/*
7. Factory Functions with LOTR
Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes:
===============================================================================================
| Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
-----------------------------------------------------------------------------------------------
| Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
-----------------------------------------------------------------------------------------------
| Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
-----------------------------------------------------------------------------------------------
| Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
-----------------------------------------------------------------------------------------------
| Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
-----------------------------------------------------------------------------------------------
| Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
-----------------------------------------------------------------------------------------------
Each character should have the method describe which takes no parameters and prints out the string: "{name} is a {race} from {origin}."

Each character should also have a method called evaluateFight that takes in a character object and returns the following string: "Your opponent takes {x} damage and you receive {y} damage" where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.
*/

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    describe: function() {
      console.log(
        `${this.name} is a ${this.race} from ${this.origin}.`
      );
    },
    evaluateFight: function(opponent) {
      let damageToCharacter = 0;
      let damageToOpponent = 0;
      if (this.defense < opponent.attack) {
        damageToCharacter = opponent.attack - this.defense; //YOUR DAMAGE
      } 
      if (opponent.defense < this.attack) {
        damageToOpponent = this.attack - opponent.defense; //OPPONENT DAMAGE
      }
      console.log(`Your opponent takes ${damageToOpponent} damage and you receive ${damageToCharacter} damage.`);
    },
  };
}

let characterOne = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
let characterTwo = createCharacter('TEST', 'testing', 'tester', 'test', 2, 1);
characterOne.describe();
characterTwo.describe();
characterOne.evaluateFight(characterTwo);

