/* Given base and n that are both 1 or more, 
compute recursively (no loops) the value of base to the n power,
so powerN(3, 2) is 9 (3 squared). */

'use strict';


function nToThePower(x: number, y: number): number {

    if (y == 0) {
        return 1;
    }
    if (y >= 1) {
    return (x * (nToThePower(x, y - 1)));
    }
}

console.log(nToThePower(2, 3));
