var User = {
    name: "prabhat",
    email: "prabhat@mail.com",
    isActive: true
};
// in the example below there is a functions having an object as parameter.
function createUser(user) { }
createUser({ name: "prabhat", email: "prabhat@mail.com", isAuthenticated: false });
// in the emaple below there is a function which returns an object.
function makeUser() {
    return { name: "prabhat", email: "prabhat@mail.com", isAuthenticated: true };
}
// odd behaviour of typescript , we can pass an argument which is not accepted in the above function createUser.
var newUser = { name: "prabhat", email: "prabhat@mail.com", isAuthenticated: false, password: "12345" };
createUser(newUser);
