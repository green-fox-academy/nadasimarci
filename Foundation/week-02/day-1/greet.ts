// -  Create variable named `nameToGreet` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `nameToGreet

let nameToGreet: string = "Greenfox";

function greet(nameToGreet: string): any {
    if (nameToGreet)
        return "Greetings, dear " + nameToGreet
    else
        return "Please enter a name!"
}

console.log(greet(nameToGreet));