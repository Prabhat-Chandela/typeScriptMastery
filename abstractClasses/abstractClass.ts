// abstract class in typeScript , no new object can be created from an abstract class , it can only be inhereted by any class using 'extends' keyword.The major difference in an interface and abstract class is that we can also write function logic in an abstract class .


// we can declare the fucntion name in an abstract class as we do in interface (as we have done in below abstract class Takephoto, where we have declared a function 'getSepia()') and we can also write function logic in abstract class (as we have done in below abstract class Takephoto, where we have written a function 'getReelTime()').

abstract class Takephoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    // we can also mark functions as abstract , the function which is marked as abstract must be included in the class which is inhereting the abstract class.
    abstract getSepia(): void

    getReelTime():number{
        return 10;
    }
}

// in the example below , we created a class 'Instagram' which is extending or inhereting the abstract class 'Takephoto'.

class Instagram extends Takephoto{
    constructor(
        public cameraMode:string,
        public filter: string,
        public burst : number
    ){super(cameraMode , filter)}

    getSepia(): void {
        
    }

    // we can also overwrite the function which we have written the abstract class inside the class which is inhereting it.

    // getReelTime():number{
    //     return 12;
    // }
}

const pc = new Instagram('potrait', 'vintage', 5);

// we can also access the function 'getReelTime()' , which we have written in the above abstract class 'Takephoto'.
pc.getReelTime();