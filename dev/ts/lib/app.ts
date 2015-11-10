/// <reference path="../typings/jquery.d.ts" />
import $ = require('jquery');
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
    $('body')
      .append(this.person.greet())
      .append(this.dog.greet());
  }
}
