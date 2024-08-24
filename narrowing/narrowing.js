// type narrowing cases in typeScript.Narrowing is just precautionary steps we take to better our business logic to minimize the risk of error or minimize the risk of code breaking.
// In the example below we are using 'typeof(type gaurd)' to check the type of the value as precautionary step.
function detectType(val) {
    if (typeof val === 'string') {
        return val.toUpperCase();
    }
    return val + 3;
}
//In the example we checking for the null case as a precautionary measure. 
function getId(id) {
    if (!id) {
        console.log("id cannot be null");
        return;
    }
    return id.toLowerCase();
}
// In the example below the code looks great and most of the cases are covered but we have not covered one case which is empty strings "" , as empty strings is a truthy value . The  code will not throw any error but the idealy we should be checking for empty string as well.
function printAll(strs) {
    // check for null.
    if (strs) {
        // check for array of strings.
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        // check for string.
        else if (typeof strs === "string") {
            console.log(strs);
        }
        // but we have not checked for an empty string.
    }
}
function isAdminAccount(account) {
    if ("adminId" in account) {
        console.log("is Admin");
        return account.adminId;
    }
    return false;
}
// 'instanceof' narrowing.It is useful for most values that can be constructed with 'new' keyword.In the example below we have created a function 'valueCheck', where we write our logic based on whether the value is a Date object or a string.
function valueCheck(val) {
    if (val instanceof Date) {
        return val.toDateString();
    }
    else {
        return val.toLocaleLowerCase();
    }
}
// the function below returns a boolean.
// function isFish(pet: Fish | Bird){
//     return(pet as Fish).swim!== undefined
// }
// But if we use type predicates in the 'isFish' method we can return pet as type fish when the value is true.
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        // Here, TypeScript knows 'pet' is of type 'Fish'
        pet;
        return "Fish food";
    }
    else {
        // Here, TypeScript knows 'pet' is of type 'Bird'
        pet;
        return "Bird food";
    }
}
function getShape(object) {
    if (object.shape === "circle") {
        return "Circle";
    }
    return "Square";
}
function getArea(object) {
    switch (object.shape) {
        case "circle":
            return Math.PI * Math.pow(object.radius, 2);
        case "square":
            return object.side * object.side;
        case "rectangle":
            return object.length * object.width;
        default:
            var _defaultforshape = object;
            return _defaultforshape;
    }
}
