interface Comparable2 {
  compareTo(other: Comparable2): number;
  name: string;
  completed: boolean;
}

export class Thing implements Comparable2 {
  name: string;
  completed: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  public complete(): void {
    this.completed = true;
  }

  getName(): string {
    return this.name;
  }

  getCompleted(): boolean {
    return this.completed;
  }

  compareTo(other: Comparable2): number {
    if (this.name < other.name) {
      return -1;
    }
    if (this.name > other.name) {
      return 1;
    }
    return 0;
  }
}

function sortByCompleted(arr: Thing[]) {
  let completed: Thing[] = [];
  let uncompleted: Thing[] = [];
  completed = arr.filter(thing => !thing.completed);
  uncompleted = arr.filter(thing => thing.completed);
  completed.sort(function (a: Thing, b: Thing): number {
    return a.compareTo(b);
  });
  uncompleted.sort(function (a: Thing, b: Thing): number {
    return a.compareTo(b);
  });
  arr = uncompleted.concat(completed);
  return arr;
}

let things: Thing[] = [];
things.push(new Thing('milk'));
things.push(new Thing('bread'));
things.push(new Thing('tea'));
things.push(new Thing('cheese'));
things.push(new Thing('butter'));
things.push(new Thing('carrot'));

things[1].complete();
things[3].complete();

console.log(sortByCompleted(things));

