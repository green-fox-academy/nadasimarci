'use strict';

import { Plant, Flower, Tree } from './plant-2'

export class Garden {
  gardenName: string;
  plants: Plant[] = [];

  constructor(gardenName: string, plants: Plant[] = []) {
    this.gardenName = gardenName;
    this.plants = plants;
  }


  addPlant(newPlant: Plant): void {
    this.plants.push(newPlant);
  }


  public waterAllThePlants(amount: number): void {
    const thirstyCounter: number = this.plants.filter(
      onePlant => onePlant.needsWatering()
    ).length;
    const currentWaterAmount: number = amount / (thirstyCounter || 1);

    console.log(`\nWatering with ${amount}`);

    this.plants.forEach((onePlant: Plant) => {
      if (onePlant.needsWatering() === true) {
        onePlant.watering(currentWaterAmount);
      }
    });
  }

  public printStatus(): void {
    this.plants.forEach(
      (onePlant: Plant) => onePlant.printStatus()
    );
  }
}


