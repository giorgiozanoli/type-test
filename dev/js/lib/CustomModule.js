define(["require", "exports"], function (require, exports) {
    var Greeter = (function () {
        function Greeter(personName) {
            this.personType = 'Mr';
            this.personName = personName;
        }
        Greeter.prototype.greet = function () {
            return "<h1>Hello " + this.personType + " " + this.personName + "</h1>";
        };
        return Greeter;
    })();
    exports.Greeter = Greeter;
});
