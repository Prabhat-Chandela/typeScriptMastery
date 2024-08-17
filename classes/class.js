// class syntax in typeScript is similar to the syntax in javaScript but we have to declare the type of the variables before we can use them in the constructor as shown in the example below.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "haridwar";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var pc = new User("pc@mail.com", "prabhat");
// accessModifier in typeScript , by default the modifier value is set to "public" but we can make it private using "private".if we assign private to any variable in the class we cannot use it or access it outside that class.
var Customer = /** @class */ (function () {
    function Customer(email, name) {
        this.email = email;
        this.name = name;
    }
    return Customer;
}());
var pcCustomer = new Customer("pc@mail.com", "prabhat");
// we cannot access the name property of the class Customer here if we try to.
// pcCustomer.name
// simpler way or shortcut for using access modifier and variables in class is shown in the example below.
var Consumer = /** @class */ (function () {
    function Consumer(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "haridwar";
    }
    return Consumer;
}());
var pcConsumer = new Consumer("pc@mail.com", "prabhat", "123456");
// getters and setters in typeScript shown in the example below.
var AppleUser = /** @class */ (function () {
    function AppleUser(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.productsCount = 1;
    }
    Object.defineProperty(AppleUser.prototype, "getAppleEmail", {
        // below is an example of getter using 'get' keyword , where we have created a method 'getAppleEmail' which returns appleEmail.
        get: function () {
            return "apple@".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppleUser.prototype, "productCount", {
        // below is an example of getter using 'get' keyword , where we have created a method 'ProductCount' which is accessing or getting the value of the private variable 'productsCount'.
        get: function () {
            return this.productsCount;
        },
        // below is the example of setter in typeScript using 'set' keyword , where we created a method 'ProductCount' which is setting the value of the 'productsCount'.The important part here is that teher is no return type of a setter in typeScript.
        set: function (productNum) {
            if (productNum <= 1) {
                throw new Error("product count should be more than one.");
            }
            this.productsCount = productNum;
        },
        enumerable: false,
        configurable: true
    });
    return AppleUser;
}());
// inheritance and 'protected' access modifier.'protected' is useful in the case of inheritance as the variable or method which is marked as protected can be used or is accessable in the class which is inheriting the variable's class.In the example below we see a class 'SubUser' inheriting the class 'GoogleUser' using the 'extends' keyword and the protected variable 'courses' of class GoogleUser is also accessable in the class 'SubUser'.
var GoogleUser = /** @class */ (function () {
    function GoogleUser(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.courses = 1;
    }
    Object.defineProperty(GoogleUser.prototype, "courseCount", {
        get: function () {
            return this.courses;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("product count should be more than one.");
            }
            this.courses = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return GoogleUser;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubUser.prototype.changeCourseCount = function () {
        return this.courses + 2;
    };
    return SubUser;
}(GoogleUser));
