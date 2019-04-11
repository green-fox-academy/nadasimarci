// Given a string, compute recursively a new string where all the 'x' chars have been removed.

'use strict';

function removeX(str: string): string {

    if (str.indexOf('x') == -1) {
        return str;
    }
    else {
        str = str.replace('x', '')
        return removeX(str)
        }
}
console.log(removeX('xYxYxYxYx'));
 