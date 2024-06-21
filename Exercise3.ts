//1
let sumCalculator  = (number1 : number, number2 : number) : number =>{
    return number1 + number2;
}
console.log(sumCalculator(50, 50));

//2
let fixedNumber = () : number =>{

    return 1;
}
console.log(fixedNumber());


//3

let doStuff = (text : string, bool? : boolean) : string =>{
    let result : string = (bool) ? text.toUpperCase() : text.toLowerCase();
    return result;
}
console.log(doStuff('typescript is fun honestly!' , true));
