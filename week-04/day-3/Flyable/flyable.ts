'use strict';

import { Animal } from "../Animals-in-the-zoo/animal";

interface Flyable {
  land();
  fly();
  takeOff();
}

abstract class Vehicle {
  brand: string;
  engineOutputInHp: number;
  zeroToHundred: number;
}

class Helicopter extends Vehicle implements Flyable {
  land() { };
  fly() { };
  takeOff() { };
}

class Bird extends Animal implements Flyable {
  land() { };
  fly() { };
  takeOff() { };
}

