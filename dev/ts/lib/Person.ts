/// <reference path="../typings/jquery.d.ts" />
import $ = require('jquery');

export class Person {
    public personName : String
    private personType : String

    constructor(personName: String) {
      this.personType = 'Mr';
      this.personName = personName;
    }

    greet() {
      return $('<div></div>')
                .append(
                  $('<h1></h1>')
                    .html("Hello by " + this.personType + " " + this.personName)
                )
                .html();
    }
}
