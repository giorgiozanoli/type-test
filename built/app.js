var CustomModule_1 = require("./lib/CustomModule");
var greeter = new CustomModule_1.Greeter("Michael");
document.body.innerHTML = greeter.greet();
