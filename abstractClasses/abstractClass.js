// abstract class in typeScript , no new object can be created from an abstract class , it can only be inhereted by any class using 'extends' keyword.The major difference in an interface and abstract class is that we can also write function logic in an abstract class .
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
// we can declare the fucntion name in an abstract class as we do in interface (as we have done in below abstract class Takephoto, where we have declared a function 'getSepia()') and we can also write function logic in abstract class (as we have done in below abstract class Takephoto, where we have written a function 'getReelTime()').
var Takephoto = /** @class */ (function () {
    function Takephoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    Takephoto.prototype.getReelTime = function () {
        return 10;
    };
    return Takephoto;
}());
// in the example below , we created a class 'Instagram' which is extending or inhereting the abstract class 'Takephoto'.
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    Instagram.prototype.getSepia = function () {
    };
    return Instagram;
}(Takephoto));
var pc = new Instagram('potrait', 'vintage', 5);
// we can also access the function 'getReelTime()' , which we have written in the above abstract class 'Takephoto'.
pc.getReelTime();
