import {Person} from "./Person";
import {Dog} from "./Dog";

export class App {
  public person : Person
  public dog    : Dog

  constructor(personName : String = "White", dogColor: String = "Black Spotted", dogName : String = "Rudolf"){
    this.person = new Person(personName);
    this.dog    = new Dog(dogName, dogColor);
    this.updateBody();
  }

  updateBody(){
    document.body.innerHTML = this.person.greet() + this.dog.greet();
  }
}
