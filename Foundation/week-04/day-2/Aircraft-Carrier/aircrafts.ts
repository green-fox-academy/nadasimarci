'use strict';

export class Aircraft {
  aircraftType: string;
  baseDamage: number;
  maxAmmo: number;
  currentAmmo: number;

  constructor(aircraftType: string, baseDamage: number, maxAmmo: number, currentAmmo: number = 0) {
    this.aircraftType = aircraftType;
    this.baseDamage = baseDamage;
    this.maxAmmo = maxAmmo;
    this.currentAmmo = currentAmmo;
  }


  fight(): number {
    let damagePoint: number = this.baseDamage * this.currentAmmo;
    this.currentAmmo = 0;
    return damagePoint;
  }


  refill(refillAmount: number): number {
    if (refillAmount >= this.maxAmmo) {
      this.currentAmmo += this.maxAmmo;
      refillAmount -= this.maxAmmo;
    } else {
      this.currentAmmo += refillAmount;
      refillAmount = 0;
    }
    return refillAmount;
  }


  getType(): string {
    return String(this.aircraftType);
  }


  getStatus(): string {
    return `Type ${this.aircraftType}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage * this.currentAmmo}`
  }


  isPriority(): boolean {
    if (this.aircraftType === 'F35') {
      return true;
    }
    else {
      return false;
    }
  }
}


export class F16 extends Aircraft {

  constructor() {
    super('F16', 30, 8);
  }
}


export class F35 extends Aircraft {

  constructor() {
    super('F35', 50, 12);
  }
}

