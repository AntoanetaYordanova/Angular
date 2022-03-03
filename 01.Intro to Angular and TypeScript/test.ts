class Person {
    constructor(public name : string, private age : number) {}
    getAge()  {
        return this.age;
    }
}

const person = new Person('ivan', 30);

const age = person.getAge()
