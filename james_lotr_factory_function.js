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


/*
Add a new character to characters (make up any attributes not provided):

Arwen Undomiel is a Half-Elf of Rivendell
Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.

Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.

Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.

What if you wanted to equip a weapon for each character and change how they are described? For example:

Gandolf the White is a Wizard of the Middle Earth who uses a wizard staff
Bilbo Baggings is a Hobbit of the Shire who uses the Ring
Frodo ... String and Barrow Blade
Aragon .... Anduril
Legolas ... Bow and Arrow
Arwen .... Hadhafang
How would you change the factory function and other methods?
*/

// Using array literal syntax, create an array characters that calls your factory function for each character in the table above with the relevant parameters. Your characters array should now have 5 objects in it.
let characterPlayers = [];

