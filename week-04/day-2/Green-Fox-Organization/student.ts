'use strict';

import { Person } from './person'

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(previousOrganization: string = 'The School of Life', skippedDays: number = 0) {
    super();
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  getGoal(): void {
    console.log('My goal is: Be a junior software developer.');
  }

  skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
  }
}

