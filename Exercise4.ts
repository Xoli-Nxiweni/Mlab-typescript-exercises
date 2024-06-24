//1
class Person{
    name : string = 'Xoli';
    age : number = 26;
    

    PersonName = () : string =>{
        return this.name;
    }

    //2
    private socialSecurityNumber : number = 458765892321;
    // constructor(number? : number | any){
    //     this.socialSecurityNumber = number;
    // }
    // setSSNum = (num : number) =>{
    //     this.socialSecurityNumber = num
    // }
    // getSSNum = () : number =>{
    //     return this.socialSecurityNumber;
    // }

    getAge = () : number =>{
            return this.age;
        }
}
//1
let person = new Person()
console.log(person.PersonName());

//2
console.log(person.getAge());

