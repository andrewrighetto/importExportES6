import { Person } from './modules/person.js';

let person1 = new Person("Tony", "Montana", "The Butcher");

let label = person1.getName() + " " + person1.getSurname() + " - " + person1.getNickname();

console.log(label);
document.getElementById("label").innerHTML = label;