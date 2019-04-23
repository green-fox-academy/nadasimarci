'use strict';

import { Plant } from './plant'

export class Tree extends Plant {
  waterIntake: number = 0.4;
  constructor(color: string, waterLevel: number = 3) {
    super(color, waterLevel)
  }
  checkWaterLevel() {
    if (this.waterLevel < 10) {
      console.log("The " + this.color + " tree needs water.");
    }
    else {
      console.log("The " + this.color + " tree doesn't need water.");
    }
  }
}

