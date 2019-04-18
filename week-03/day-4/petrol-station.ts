/* Create a Station and a Car classes
Station
- gasAmount
-refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount 

Car
- gasAmount
- capacity
- create constructor for Car where:
  - initialize gasAmount -> 0
  - initialize capacity -> 100 */

'use strict';

class Station {
  gasAmountStation: number;

  constructor(gasAmountStation: number) {
    this.gasAmountStation = gasAmountStation;
  }

  refill(car: Car) {
    this.gasAmountStation -= car.capacity;
    car.gasAmountCar += car.capacity;
  }

}

class Car {
  gasAmountCar: number;
  capacity: number;

  constructor(gasAmountCar: number = 0, capacity: number = 100) {
    this.gasAmountCar = gasAmountCar;
    this.capacity = capacity;
  }
}

const benzinKut: Station = new Station(500);
const benzinTemeto: Car = new Car();

benzinKut.refill(benzinTemeto);

console.log(benzinKut);

console.log(benzinTemeto);

