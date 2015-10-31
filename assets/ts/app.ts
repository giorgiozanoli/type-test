import {Greeter} from "./lib/CustomModule";
var greeter = new Greeter("Michael");

document.body.innerHTML = greeter.greet();
