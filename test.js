class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
speak(){
    console.log(`${this.name}: hello!`)
}
}

const aron = new Person('aron',17)
console.log(aron.name);
console.log(aron.age);

// 2.getter and setter
class User{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName =lastName;
        this.age=age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age=value < 0 ? 0 : value;
    }
}

const user1 = new User('lee','aron',-1);
console.log(user1.age);
