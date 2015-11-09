import {Greeter} from "./lib/CustomModule";
var greeter = new Greeter("White");

document.body.innerHTML = greeter.greet();

console.log('Here I AM!');
