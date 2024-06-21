class Calculator{
    protected validator = (parameter1 : number, parameter2 : number) =>{
        if(typeof parameter1 !== 'number' || typeof parameter2 !== 'number'){
            console.log(`One`);
        }
    }
    public addition = (parameter1 : number, parameter2 : number) : number =>{
        this.validator(parameter1, parameter2)
        return parameter1 + parameter2
    }
    public subtraction = (parameter1 : number, parameter2 : number) : number =>{
        this.validator(parameter1, parameter2)
        return parameter1 - parameter2
    }
    public multiplication = (parameter1 : number, parameter2 : number) : number =>{
        this.validator(parameter1, parameter2)
        return parameter1 * parameter2
    }
    public division = (parameter1 : number, parameter2 : number) : number | string =>{
        this.validator(parameter1, parameter2)
        if(parameter2 === 0){
            return 'Cannot divide by 0 by law!!'
        }else{
            return parameter1 / parameter2
        }
    }
}

    let calc = new Calculator();

    let sum = calc.addition(5, 95)
    let difference = calc.subtraction(50, 25)
    let product = calc.multiplication(5, 25)
    let quotient = calc.division(250, 10)
    console.log(`sum = ${sum}
    difference = ${difference}
    product = ${product}
    quotient = ${quotient}`);
