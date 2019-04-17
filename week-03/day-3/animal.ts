/* Create an Animal class
- Every animal has a hunger value, which is a whole number
- Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value

- Every animal can eat() which decreases their hunger by one
- Every animal can drink() which decreases their thirst by one
- Every animal can play() which increases both by one */

'use strict';

export { }

class Animal {
  hunger: number;
  thirst: number;

  constructor(hunger: number = 50, thirst: number = 50) {
    this.hunger = hunger;
    this.thirst = thirst;

  }
  eat() {
    this.hunger -= 1;
    console.log(`If this animal eats, its hunger value is ${this.hunger}.`);

  }
  drink() {
    this.thirst -= 1;
    console.log(`If this animal drinks, its thirst value is: ${this.thirst}.`);
  }
  play() {
    this.hunger += 1;
    this.thirst += 1;
    console.log(`If this animal plays, its hunger and thirst values are ${this.hunger} and ${this.thirst} respectively.`);

  }
}

const Lion: Animal = new Animal();
Lion.eat();

console.log('------------------------------');

const Zebra: Animal = new Animal();
Zebra.drink();

console.log('------------------------------');

const Buffalo: Animal = new Animal();
Buffalo.play();

