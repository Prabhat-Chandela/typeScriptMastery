// type aliases is just a covenient way of assigning types to the variables or elements of an object , once you define the type you can use them in the program anywhere without describing there type again .
// in the example below there is a function which have user of the above type 'User' as a parameter and also returns an object of type 'User'.
function makeUser(user) {
    return { name: "", email: "", isAuthenticated: true };
}
makeUser({ name: "", email: "", isAuthenticated: false });
function markCordinate(point) {
    console.log("The coordinate's x value is " + point.x);
    console.log("The coordinate's y value is " + point.y);
}
markCordinate({ x: 10, y: 10 });
// in the example below we are creating mycustomer of type 'Customer' but we didnot provide the creditCard value as it is an optional variable.
var myCustomer = {
    _id: "123456",
    name: "prabhat",
    email: "prabhat@mail.com",
    isActive: true
};
