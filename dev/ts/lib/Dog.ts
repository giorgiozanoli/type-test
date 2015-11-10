/// <reference path="../typings/jquery.d.ts" />
import $ = require('jquery');
import {IAnimal} from './IAnimal';

export class Dog implements IAnimal{
  public hasFur : boolean
  public color  : String
  public name   : String

  constructor(name: String = "Teddy", color: String = "black"){
    this.hasFur = true;
    this.color = color;
    this.name  = name;
  }

  greet() {
    return $('<div></div>')
              .append(
                $('<h1></h1>')
                  .html("Woof woof by "+ this.name + " with " + this.color + " coloured fur.")
              )
              .html();
  }
}
