'use strict';

import { Plant } from './plant'

export class Flower extends Plant {
  waterIntake: number = 0.75;
  constructor(color: string, waterLevel: number = 2) {
    super(color, waterLevel)
  }
  checkWaterLevel() {
    if (this.waterLevel < 5) {
      console.log("The " + this.color + " flower needs water.");
    }
    else {
      console.log("The " + this.color + " flower doesn't need water.");
    }
  }
}

