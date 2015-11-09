export class Person {
    public personName : String
    private personType : String

    constructor(personName: String) {
      this.personType = 'Mr';
      this.personName = personName;
    }

    greet() {
        return "<h1>Hello by "+ this.personType + " " + this.personName + "</h1>";
    }
}
