'use strict';

abstract class Instrument {
  protected name: string;
  play(): void { };
}

abstract class StringedInstruments extends Instrument {
  abstract numberOfStrings: number;
  sound(): void { };
  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument, that goes ${this.sound()}`)
  }
}

export class ElectricGuitar extends StringedInstruments {
  name: string = 'Electric Guitar'
  numberOfStrings: number;

  constructor(newNumberOfString: number = 6) {
    super();
    this.numberOfStrings = newNumberOfString;
  }
  sound(): string {
    return 'Twang';
  }
}


export class BassGuitar extends StringedInstruments {
  name: string = 'Bass Guitar';
  numberOfStrings: number;

  constructor(newNumberOfString: number = 4) {
    super();
    this.numberOfStrings = newNumberOfString;
  }
  sound(): string {
    return 'Duum-duum-duum';
  }
}

export class Violin extends StringedInstruments {
  name: string = 'Violin';
  numberOfStrings: number;

  constructor(newNumberOfString: number = 4) {
    super();
    this.numberOfStrings = newNumberOfString;
  }
  sound(): string {
    return 'Screech';
  }
}

