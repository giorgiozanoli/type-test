export class Greeter {
    public personName : string
    private personType : string
    constructor(personName: string) {
      this.personType = 'Mr';
    }
    greet() {
        return "<h1>Hello "+ this.personType + " " + this.personName + "</h1>";
    }
}
