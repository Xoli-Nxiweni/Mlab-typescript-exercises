//1
var Person = /** @class */ (function () {
    function Person() {
        var _this = this;
        this.name = 'Xoli';
        this.age = 26;
        this.PersonName = function () {
            var name = _this.name;
            return name;
        };
        //2
        this.socialSecurityNumber = 458765892321;
        // constructor(number? : number | any){
        //     this.socialSecurityNumber = number;
        // }
        // setSSNum = (num : number) =>{
        //     this.socialSecurityNumber = num
        // }
        // getSSNum = () : number =>{
        //     return this.socialSecurityNumber;
        // }
        this.getAge = function () {
            return _this.age;
        };
    }
    return Person;
}());
//1
var person = new Person();
console.log(person.name);
//2
console.log(person.getAge());
