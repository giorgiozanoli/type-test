define(["require", "exports"], function (require, exports) {
    var Person = (function () {
        function Person(personName) {
            this.personType = 'Mr';
            this.personName = personName;
        }
        Person.prototype.greet = function () {
            return "<h1>Hello " + this.personType + " " + this.personName + "</h1>";
        };
        return Person;
    })();
    exports.Person = Person;
});
