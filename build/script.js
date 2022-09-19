"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
var Cake_1 = require("./Cake");
console.log('######## CUSTOM CAKE ########');
var flavour = prompt('Flavour: ');
var icing = prompt('Icing: ');
var size = Number(prompt('Size: '));
var shape = prompt('Shape: ');
var price = Number(prompt('Price: $'));
var cake = new Cake_1.Cake({
    flavour: flavour,
    icing: icing,
    size: size,
    shape: shape,
    price: price
});
cake.bake();
cake.slice(6);
cake.takeSlice();
//cake.cakeInfo();
