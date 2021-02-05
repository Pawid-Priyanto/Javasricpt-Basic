const person = {
    firstName : "Abuba",
    lastName : "Steak",
    age : 26,
    hobies : ['jogging', 'futsal', 'movie'],
    address: {
        street: 'Jalanin aja dulu',
        city: 'Harapan Indah',
        state: 'Planet Namex'
    }
}

console.log("My name", person.firstName, person.lastName, "age", person.age);
console.log(person.hobies);
console.log(person.address.city, person.address.street, person.address.state);


const todo =[
    {
        id: 1,
        text: 'testing',
        isCompleted: true
    },
    {
        id: 2,
        text: 'prod',
        isCompleted: true
    },
    {
        id: 3,
        text: 'loss',
        isCompleted: false
    }
];
console.log(todo[2].isCompleted);

const json = JSON.stringify(todo);
console.log(json);

// for array

for(item of todo){
    console.log(item.text);
}

// foreach
const arr = todo.forEach( (bud) => {
    console.log(bud);
});

// map

const Text = todo.map( (params) => {
    return params.text;
});
console.log(Text);

// filter
const Comp = todo.filter((a) =>{
    return a.isCompleted == true;
}).map((a) =>{
    return a.text;
});

console.log(Comp);

// constructor function

function Person(name, age, gender, dob){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.dob = new Date(dob);
    this.getBirthDay = function () {
        return this.dob.getFullYear();
    }
    this.getName = function () {
        return this.name;
    }
}

class Car {
    constructor(merk, color, year){
        this.merk = merk;
        this.color = color;
        this.year = new Date(year);
    }
    getYear() {
        return this.year.getFullYear();
    }
}

// instance object
const car1 = new Car('Bmw','black', '01-01-2000' );
const person1 = new Person('Kai', 26, 'male', '09-12-1994');

console.log(person1.getBirthDay());
console.log(person1.getName());

console.log(car1.getYear());
console.log(car1.merk);