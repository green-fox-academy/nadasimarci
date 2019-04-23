'use strict';

export class Plant {
  color: string;
  waterLevel: number;
  waterIntake: number;
  constructor(color: string, waterLevel: number = 2) {
    this.color = color;
    this.waterLevel = waterLevel;
  }
  watering(waterAmount: number) {
    this.waterLevel += (waterAmount * this.waterIntake);
  }
}

