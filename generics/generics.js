// generics in typeScript.Below is the example of a generic, where we have declared a generic function identity which haave val as parameter of same type and returns a value of the same type.
function identity(val) {
    return val;
}
// here if we pass the value as a number in the above function identity it's type will be number and will return a value of type number only.
// identity(3);
// here if we pass the value as a string in the above function identity it's type will be string and will return a value of type string only.
// identity("prabhat");
// here if we pass the value as a boolean in the above function identity it's type will be boolean and will return a value of type boolean only.
identity(true);
// shortcut of declaring a generics.
function identityOne(val) {
    return val;
}
function identityTwo() {
}
// generics with array. In the example below we have declared a generic function 'getSearchResults', where we take parameter as an array of generic type and returning a value of generic type.
function getSearchResults(products) {
    // below we are  returnig 3rd index value from the array 'products' which is of generic type.
    return products[3];
}
// below we see a similar example but with arrow function syntax.
var getSearchProducts = function (products) {
    // below we are  returnig 5th index value from the array 'products' which is of generic type.
    return products[5];
};
// we also have sytnax where we put',' in the generic type tag like '<T,>' just to differentiate the tag from a normal tags like <h1> , <p> or to differentitate from JSX in react.
// const getSearchProducts = <T,>(products: T[]):T=>{
//     return products[5]
// }
// type parameters in generics.In the example below we have declared a generic function 'randomFunction' , where there are two generic types T and U and U is of Type number as it extends from number , therefore the variable of type U will only have a number value only and the function returns an object.
function randomFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
randomFunction(3, 5);
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
anotherFunction("prabhat", { connection: "12132", userName: "pc@10" });
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addtoCart = function (item) {
        this.cart.push(item);
    };
    return Sellable;
}());
// Usage examples:
// Create a Sellable instance for Product items
var productCart = new Sellable();
// Add a product to the cart using the addtoCart method
productCart.addtoCart({ name: "Laptop", type: "Electronics", id: 1 });
// Create a Sellable instance for Course items
var courseCart = new Sellable();
// Add a course to the cart using the addtoCart method
courseCart.addtoCart({ name: "Mathematics", subject: "Algebra", courseNo: 101 });
