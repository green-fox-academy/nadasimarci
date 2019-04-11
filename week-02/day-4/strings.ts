/* Given a string, compute recursively (no loops) a new string 
where all the lowercase 'x' chars have been changed to 'y' chars.*/

'use strict';

function changeXtoY(str: string): string {

    if (str.indexOf('x') == -1) {
        return str;
    }
    else {
    str = str.replace('x', 'y')
    return changeXtoY(str)
    }
}
console.log(changeXtoY('xXxXxXxXx'));
