let xyNumber:number = 5;

function factoria(numberFromZero:number) {
    for (let i=1; i < xyNumber; i++) {

        numberFromZero = numberFromZero * i;
    }
    return numberFromZero;

}

console.log(factoria(xyNumber));