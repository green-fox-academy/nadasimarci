/* Create Sharpie class
- We should know about each sharpie their color (which should be a string), 
  width (which will be a floating point number), inkAmount (another floating point number)
- When creating one, we need to specify the color and the width
- Every sharpie is created with a default 100 as inkAmount
- We can use() the sharpie objects
- which decreases inkAmount */

'use strict';

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number, inkAmount: number = 100.0) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }

  use() {
    this.inkAmount -= 1.5;
    console.log(`If you use a new ${this.width} wide Sharpie in ${this.color}, inkAmount is decreased to ${this.inkAmount}.`);
  }
}

const firstSharpie: Sharpie = new Sharpie('black', 1.5);
firstSharpie.use();



