// class syntax in typeScript is similar to the syntax in javaScript but we have to declare the type of the variables before we can use them in the constructor as shown in the example below.


class User {
    // the email and name here refers to the this.email and this.name in the constructor below. 
    email: string
    name: string
    readonly city: string = "haridwar"

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

const pc = new User("pc@mail.com", "prabhat");


// accessModifier in typeScript , by default the modifier value is set to "public" but we can make it private using "private".if we assign private to any variable in the class we cannot use it or access it outside that class.

class Customer {

    public email: string
    private name: string


    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

const pcCustomer = new Customer("pc@mail.com", "prabhat");

// we cannot access the name property of the class Customer here if we try to.
// pcCustomer.name


// simpler way or shortcut for using access modifier and variables in class is shown in the example below.

class Consumer {
    readonly city: string = "haridwar";
    constructor(public email: string, public name: string, private userId: string) { }
}

const pcConsumer = new Consumer("pc@mail.com", "prabhat", "123456");


// getters and setters in typeScript shown in the example below.

class AppleUser {

    private productsCount = 1;

    constructor(
        public name: string,
        public email: string,
        private userId: number
    ) { }

    // below is an example of getter using 'get' keyword , where we have created a method 'getAppleEmail' which returns appleEmail.
    get getAppleEmail(): string {
        return `apple@${this.email}`
    }

    // below is an example of getter using 'get' keyword , where we have created a method 'ProductCount' which is accessing or getting the value of the private variable 'productsCount'.
    get productCount(): number {
        return this.productsCount
    }

    // below is the example of setter in typeScript using 'set' keyword , where we created a method 'ProductCount' which is setting the value of the 'productsCount'.The important part here is that teher is no return type of a setter in typeScript.

    set productCount(productNum: number) {
        if (productNum <= 1) {
            throw new Error("product count should be more than one.");
        }
        this.productsCount = productNum;
    }

}

// inheritance and 'protected' access modifier.'protected' is useful in the case of inheritance as the variable or method which is marked as protected can be used or is accessable in the class which is inheriting the variable's class.In the example below we see a class 'SubUser' inheriting the class 'GoogleUser' using the 'extends' keyword and the protected variable 'courses' of class GoogleUser is also accessable in the class 'SubUser'.

class GoogleUser {
    protected courses = 1
    constructor(
        public email: string,
        public name: string,
        private userId: number
    ) { }

    get courseCount(): number {
        return this.courses
    }

     set courseCount(courseNum: number){
            if (courseNum <= 1) {
                throw new Error("product count should be more than one.");
            }
            this.courses = courseNum;
        }

    }

    class SubUser extends GoogleUser {
        isFamilyMember:boolean

        changeCourseCount():number{
            return this.courses + 2
        }
    }