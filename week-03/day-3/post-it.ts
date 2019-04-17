/* Create a PostIt a class that has
- a backgroundColor
- a text on it
- a textColor */

/* Create a few example post-it objects:
- an orange with blue text: "Idea 1"
- a pink with black text: "Awesome"
- a yellow with green text: "Superb!" */

'use strict';

class PostIt {
  backgroundColor: string;
  textOnIt: string;
  textColor: string;

  constructor(
    backgroundColor: string,
    textOnIt: string,
    textColor: string,
  ) {
    this.backgroundColor = backgroundColor;
    this.textOnIt = textOnIt;
    this.textColor = textColor;
  }

  giveMeInfoAboutMyPostIt(): void {
    console.log(`I have a(n) ${this.backgroundColor} PostIt with ${this.textColor} text: "${this.textOnIt}"`);
  }
}

const myFirstPostIt: PostIt = new PostIt ('orange', 'Idea 1', 'blue');
myFirstPostIt.giveMeInfoAboutMyPostIt();

console.log('------------------------------');

const mySecondPostIt: PostIt = new PostIt ('pink', 'Awesome', 'black');
mySecondPostIt.giveMeInfoAboutMyPostIt();

console.log('------------------------------');

const myThirdPostIt: PostIt = new PostIt ('yellow', 'Superb!', 'green');
myThirdPostIt.giveMeInfoAboutMyPostIt();
