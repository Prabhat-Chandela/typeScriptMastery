// interface with class in typeScript using the 'implements' key word.
// in the example below we are creating a class 'Instagram' which implements the interface 'TakePhoto'.
var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
// in the example below we are creating a class 'Youtube' which implements the interface 'TakePhoto' but this example also shows that we can also add other variables and method into the class apart from which we have declared in the interface but a class must have the variables or methods of the implemented interface.In this example we also see how we can impletement multiple interfaces in the class as we are also implementing 'Story' interface.
var Youtube = /** @class */ (function () {
    function Youtube(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    Youtube.prototype.createStory = function () {
        return 'story';
    };
    return Youtube;
}());
