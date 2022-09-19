const prompt = require('prompt-sync')();
import { Cake } from "./Cake";

console.log('######## CUSTOM CAKE ########');
const flavour = prompt('Flavour: ');
const icing = prompt('Icing: ');
const size = Number(prompt('Size: '));
const shape = prompt('Shape: ');
const price = Number(prompt('Price: $'));

const cake = new Cake({
    flavour,
    icing,
    size,
    shape,
    price
});

cake.bake();
cake.slice(6);
cake.takeSlice();
//cake.cakeInfo();