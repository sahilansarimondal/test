function greet(person) {
    return ("hello mr " +
        person.name +
        " glad that you are " +
        person.age +
        " years old");
}
console.log(greet({
    name: "sahil",
    age: 24,
}));
// class Person implements PersonInterface {
//    name: string;
//    age: number;
//    constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//    }
//    greet() {
//       return "hi mr " + this.name;
//    }
// }
