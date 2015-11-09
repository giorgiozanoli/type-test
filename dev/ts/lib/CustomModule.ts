export class Greeter {
    public personName : String
    private personType : String
    
    constructor(personName: String) {
      this.personType = 'Mr';
      this.personName = personName;
    }

    greet() {
        return "<h1>Hello "+ this.personType + " " + this.personName + "</h1>";
    }
}
