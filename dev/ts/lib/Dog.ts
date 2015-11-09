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
      return "<h1>Woof woof by "+ this.name + " with " + this.color + " coloured fur.</h1>";
  }
}
