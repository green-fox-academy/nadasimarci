/* Create 5 trees
Store the data of them in variables in your program
for every tree the program should store its'
- type
- leaf color
- age
- sex
you can use just variables, or lists and/or maps */

'use strict';

class Tree {
  type: string;
  leafColor: string;
  age: number;
  gender: string;
  isEvergreen: boolean;

  constructor(
    type: string,
    leafColor: string,
    gender: string,
    isEvergreen: boolean,
    age: number = 0
  ) {
    this.age = age;
    this.type = type;
    this.leafColor = leafColor;
    this.gender = gender;
    this.isEvergreen = isEvergreen;
  }

  giveMeInfoAboutMyTree(): void {
    console.log(`Your tree is a(n) ${this.gender + ' ' + this.type}, aged ${this.age} with ${this.leafColor} 
                leaves and it is ${this.isEvergreen ? 'evergreen' : 'not evergreen'}`);
  }
}

const myFirstTree: Tree = new Tree('oak', 'greeeeen', 'female', false);
myFirstTree.giveMeInfoAboutMyTree();

console.log('------------------------------');

const mySecondTree: Tree = new Tree ('pine', 'dark green', 'male', true, 150);
mySecondTree.giveMeInfoAboutMyTree();

console.log('------------------------------');

const myThirdTree: Tree = new Tree ('olive', 'greenish', 'female', false, 30);
myThirdTree.giveMeInfoAboutMyTree();
