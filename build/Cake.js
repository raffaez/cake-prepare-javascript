"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cake = void 0;
var Cake = /** @class */ (function () {
    function Cake(_a) {
        var flavour = _a.flavour, icing = _a.icing, size = _a.size, shape = _a.shape, price = _a.price;
        this.slices = 0;
        this.isBaked = false;
        this.isSliced = false;
        this.flavour = flavour;
        this.icing = icing;
        this.size = size;
        this.shape = shape;
        this.price = price;
        console.log('Your cake is ready to bake!');
    }
    Cake.prototype.bake = function () {
        if (!this.isBaked) {
            this.isBaked = true;
            console.log('Your cake is ready!');
        }
        else {
            console.log('You have already baked this cake. You can slice it :)');
        }
    };
    Cake.prototype.slice = function (slices) {
        if (!this.isBaked) {
            console.log("I... don't think you can slice raw cake batter. Try baking the cake?");
        }
        else {
            if (this.isSliced) {
                console.log("You have already sliced this cake. Time to eat!");
            }
            else {
                this.isSliced = true;
                this.slices = slices;
                console.log("Sliced the cake in ".concat(slices, " slices."));
            }
        }
    };
    Cake.prototype.takeSlice = function () {
        if (this.slices > 0) {
            this.slices--;
            console.log("You took a slice off the cake and now there are ".concat(this.slices, " left."));
        }
        else {
            console.log("No more cake left :( let's get another one!");
        }
    };
    Cake.prototype.cakeInfo = function () {
        console.clear();
        console.log('\n######## CAKE INFO ########\n');
        console.log("Flavour: ".concat(this.flavour));
        console.log("Icing flavour: ".concat(this.icing));
        console.log("Size: ".concat(this.size, "cm"));
        console.log("Shape: ".concat(this.shape));
        console.log("Price: $".concat(this.price));
        if (this.isBaked) {
            console.log('This cake has been baked.');
            if (this.isSliced) {
                console.log("It's been cut in ".concat(this.slices, " slices."));
            }
        }
    };
    return Cake;
}());
exports.Cake = Cake;
