// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string [] = ["koal", "pand", "zebr"];

let animalsCorrect = animals.map(function(e) {
  return e + "a";
});

console.log(animalsCorrect);