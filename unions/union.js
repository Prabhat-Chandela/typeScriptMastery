// union allows you to assign multiple types to a variable , object , functions , arrays in typescript.
var myVar = 30;
myVar = "30";
var prabhat = { name: "prabhat", email: "prabhat@mail.com", id: 10 };
// prabhat={name:"prabhat" , email:"prabhat@mail.com" , id:10 , userName:"pc"}
prabhat = { userName: "pc", id: 10, email: "prabhat@mail.com" };
// in the below example we see the union usecase with a function.
function getId(id) {
    if (typeof id === "string") {
        id.toLocaleLowerCase();
    }
    //  if(typeof id === "number"){
    //     id + 2
    // }
}
// in the example below we see the use case of unions with array.
// it's a mixed array containing strings and number.
var mixedArr = ["prabhat", "hello", 10];
// it's a case where an array is either of type string or number.
var myArr = ["1", "2", "3"];
// in the below example we see a useful case of union , where we provide user only three options for allotment of seats and the user can select only the options available.
var seatAllotment;
seatAllotment = "aisle";
