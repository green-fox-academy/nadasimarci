/* Given a string, compute recursively (no loops) a new string 
where all the lowercase 'x' chars have been changed to 'y' chars.*/

function changeXtoY(str: string): string {

    if (str.indexOf('x') >= 0) {
        return str;
    }
    return (str.replace('x', 'y'))
}
console.log(changeXtoY('xXxXxXxXx'));
