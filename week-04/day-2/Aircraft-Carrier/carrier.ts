'use strict';

import { F16, F35, Aircraft } from './aircrafts';

export class Carrier {
  aircrafts: Aircraft[];
  currentAmmostore: number;
  hp: number;
  alive: boolean = true;

  constructor(currentAmmostore: number, hp: number) {
    this.currentAmmostore = currentAmmostore;
    this.hp = hp;
    this.aircrafts = [];
  }

  add(aircraft: Aircraft) {
    this.aircrafts.push(aircraft);
  }

  fill() {
    let prior: Aircraft[] = [];
    let rest: Aircraft[] = [];
    for (let i = 0; i < this.aircrafts.length; i++) {
      if (this.aircrafts[i].isPriority()) {
        prior.push(this.aircrafts[i]);
      } else {
        rest.push(this.aircrafts[i]);
      }
    }
    for (let i = 0; i < prior.length; i++) {
      this.currentAmmostore = prior[i].refill(this.currentAmmostore);
    }
    for (let i = 0; i < rest.length; i++) {
      this.currentAmmostore = rest[i].refill(this.currentAmmostore);
    }
  }

  fight(carrier: Carrier) {
    if (this.alive) {
      let dmg: number = 0;
      for (let i = 0; i < this.aircrafts.length; i++) {
        dmg += this.aircrafts[i].fight();

      }
      carrier.hp -= dmg;
      if (carrier.hp < 0) {
        carrier.hp = 0;
        carrier.alive = false;
      }
    }
  }

  getStatus() {
    if (this.hp != 0) {
      let dmg = 0;
      for (let i = 0; i < this.aircrafts.length; i++) {
        dmg += this.aircrafts[i].currentAmmo * this.aircrafts[i].baseDamage;
      }
      console.log(`            HP: ${this.hp}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.currentAmmostore}, Total Damage: ${dmg}`);
      for (let i = 0; i < this.aircrafts.length; i++) {
        console.log(this.aircrafts[i].getStatus());
      }
    } else {
      console.log('            ///////////////////////////  Carrier died  ///////////////////////');
    }
  }

  isAlive() { return this.alive; }
}

