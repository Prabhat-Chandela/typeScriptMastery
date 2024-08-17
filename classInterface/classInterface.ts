// interface with class in typeScript using the 'implements' key word.

interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory():string
}


// in the example below we are creating a class 'Instagram' which implements the interface 'TakePhoto'.

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }
}


// in the example below we are creating a class 'Youtube' which implements the interface 'TakePhoto' but this example also shows that we can also add other variables and method into the class apart from which we have declared in the interface but a class must have the variables or methods of the implemented interface.In this example we also see how we can impletement multiple interfaces in the class as we are also implementing 'Story' interface.

class Youtube implements TakePhoto , Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): string {
        return 'story'
    }
}