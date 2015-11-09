import {Greeter} from "./CustomModule";

export class App {
  public greeter : Greeter

  constructor(greetName : String){
    this.greeter = new Greeter(greetName || 'White');
    this.updateBody();
  }

  updateBody(){
    document.body.innerHTML = this.greeter.greet();
  }
}
