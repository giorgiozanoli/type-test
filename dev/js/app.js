define(["require", "exports", "./lib/CustomModule"], function (require, exports, CustomModule_1) {
    var greeter = new CustomModule_1.Greeter("White");
    document.body.innerHTML = greeter.greet();
    console.log('Here I AM!');
});
