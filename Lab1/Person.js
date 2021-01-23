/*Create a Person class (in a file named "Person.js") with the following:
Properties:
name (String)
favoriteColor (String)
Functions:
constructor()
Should accept two arguments and store their values as part of the class
speak()
This function should use console.log() to show the person's name in their favorite color*/

const chalk = require('chalk');

class Person {
  constructor(name, favoriteColor){
    this.name = name;
    this.favoriteColor = favoriteColor;
  }

  speak(){
    console.log(chalk.hex(this.favoriteColor)(this.name));
  }
}

module.exports = Person;