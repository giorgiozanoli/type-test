/// <reference path="../typings/jquery.d.ts" />
/// <reference path="../typings/lodash.d.ts" />
import $ = require('jquery');
import _ = require('lodash');
import {Person} from "./Person";
import {Dog} from "./Dog";
import {Collection} from "../System/Collection";

export class App {
  public personList : Collection<Person> = new Collection<Person>()
  public dogList    : Collection<Dog> = new Collection<Dog>()

  constructor(personName : String = "White", dogColor: String = "Black Spotted", dogName : String = "Rudolf"){
    _.each(_.range(0, 4, 1), function(i){
      this.personList.Add(new Person((i % 2) > 0 ? 'Mr' : 'Miss', personName));
      this.dogList.Add(new Dog(dogName, dogColor));
    }.bind(this));
    this.updateBody();
  }

  updateBody() :void{
    $('body')
      .append(
        _.map(this.personList.GetItems(), function(person: Person){
          return person.greet();
        }).join("")
      )
      .append(
        _.map(this.dogList.GetItems(), function(person: Person){
          return person.greet();
        }).join("")
      );
  }
}
