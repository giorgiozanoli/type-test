/// <reference path="../typings/jquery.d.ts" />
import $ = require('jquery');

export class Person {
    public personName : String
    private personType : String

    constructor(personType: String = "Mr", personName: String = "White") {
      this.personType = personType;
      this.personName = personName;
    }

    greet() : String{
      return $('<div></div>')
                .append(
                  $('<h1></h1>')
                    .html("Hello by " + this.personType + " " + this.personName)
                )
                .html();
    }
}
