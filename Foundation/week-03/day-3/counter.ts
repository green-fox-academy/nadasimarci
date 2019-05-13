/* Create a Counter class
- which has an integer property
- when creating it should have a default value 0 or we can specify it when creating
- we can add(number) to increase the counter's value by a whole number
- or we can add() without parameters just increasing the counter's value by one
- and we can get() the current value as string
- also we can reset() the value to the initial value */

class Counter {
  integer: number;
  initialNum: number;

  constructor(integer: number = 0) {
    this.integer = integer;
    this.initialNum = integer;
  }

  add(num: number = 1) {
    this.integer += num;
    console.log(`We increased the counter's value by a whole number to ${this.integer}.`);
  }

  get() {
    console.log(String(this.integer))
  }

  reset() {
    this.integer = this.initialNum
    console.log(this.integer)
  }
}

const counter1: Counter = new Counter ();
counter1.add(123);
counter1.add();
counter1.get();
counter1.reset();

