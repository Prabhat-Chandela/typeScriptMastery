// the below function accepts a parameter which is a nuber and returns a value after adding 2 to the num and the value returned is also a number.
function addTwo(num) {
    return num + 2;
}
addTwo(5);
// the below function accepts a parameter which is a string and returns a value after converting it to uppercase and the value returned is also a string.
function upper(val) {
    return val.toUpperCase();
}
upper("prabhat");
// more examples
function signUp(name, email, auth) { }
signUp("prabhta", "prabhat@mail.com", false);
// the example below shows how we can pass a default value of parameter of a function.
var login = function (name, email, auth) {
    if (auth === void 0) { auth = true; }
};
login("prabhat", "prabhat@mail.com");
// in the example below we are mapping over an array of heros which contains string elements and the map function returns a string value.
var heros = ["thor", "ironman", "loki", "hulk", "spiderman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// in the example below we see the use case of void , void is used when a function is not returning anything.
function consoleError(errmsg) {
    console.log(errmsg);
}
// in the example below we see the use case of never , never is used when a function will never return a value , this means that the function throws an exception or terminates execution of the program.
function handleError(errmsg) {
    throw new Error(errmsg);
}
