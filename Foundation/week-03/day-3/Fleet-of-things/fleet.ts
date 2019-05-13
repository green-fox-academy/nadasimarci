'use strict';

import { Thing } from './thing';

export class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing): void {
    this.things.push(thing);
  }

  getThings(): Thing[] {
    return this.things;
  }

  print() {
    for (let i: number = 0; i < this.getThings().length; i++) {
      if (!this.getThings()[i].getCompleted()) {
        console.log(`[ ] ${this.getThings()[i].getName()} `)
      }
      else {
        console.log(`[x] ${this.getThings()[i].getName()} `)
      }
    }
  }
}

