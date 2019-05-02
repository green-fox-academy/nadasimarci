'use strict';

export class Plant {

  color: string;
  currentWaterLevel: number;
  criticalWaterLevel: number;
  waterIntake: number;
  name: string;

  constructor(color: string, currentWaterLevel: number = 0, criticalWaterLevel: number, waterintake: number, name: string) {
    this.color = color;
    this.currentWaterLevel = currentWaterLevel;
    this.criticalWaterLevel = criticalWaterLevel;
    this.waterIntake = waterintake;
    this.name = name;
  }

  needsWatering(): boolean {
    return this.currentWaterLevel < this.criticalWaterLevel;
  }

  watering(waterAmount: number) {
    this.currentWaterLevel += waterAmount * this.waterIntake
  }

  public printStatus(): void {
    const elements: String[] = [
      'The',
      this.color,
      this.name,
      this.needsWatering() === true ? 'needs' : 'does not need',
      'water'
    ];

    console.log(elements.join(' '));
  }
}


export class Flower extends Plant {

  constructor(color: string, currentWaterLevel: number = 0) {
    super(color, currentWaterLevel, 5, 0.75, 'Flower');
  }

  needWater(): string {
    if (this.currentWaterLevel < 5) {
      return `The ${this.color} Flower needs water.`
    }
    else {
      return `The ${this.color} Flower does not need water.`
    }
  }
}


export class Tree extends Plant {

  constructor(color: string, currentWaterLevel: number = 0) {
    super(color, currentWaterLevel, 10, 0.4, 'Tree');
  }

  needWater(): string {
    if (this.currentWaterLevel < 10) {
      return `The ${this.color} Tree needs water.`
    }
    else {
      return `The ${this.color} Tree does not need water.`
    }
  }
}

