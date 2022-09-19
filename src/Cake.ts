interface NewCake{
    flavour: string;
    icing: string;
    size: number;
    shape: string;
    price: number;
}

export class Cake{
    private flavour: string;
    private size: number;
    private icing: string;
    private shape: string;
    private price: number;
    private slices: number = 0;
    private isBaked: boolean = false;
    private isSliced: boolean = false;

    constructor({flavour, icing, size, shape, price}: NewCake){
        this.flavour = flavour;
        this.icing = icing;
        this.size = size;
        this.shape = shape;
        this.price = price;
        console.log('Your cake is ready to bake!');
    }

    public bake(){
        if(!this.isBaked){
            this.isBaked = true;
            console.log('Your cake is ready!');
        }else{
            console.log('You have already baked this cake. You can slice it :)');
        }
    }

    public slice(slices:number){
        if(!this.isBaked){
            console.log(`I... don't think you can slice raw cake batter. Try baking the cake?`);
        }else{
            if(this.isSliced){
                console.log(`You have already sliced this cake. Time to eat!`);
            }else{
                this.isSliced = true;
                this.slices = slices;
                console.log(`Sliced the cake in ${slices} slices.`);
            }
        }
    }

    public takeSlice(){
        if(this.slices>0){
            this.slices--;
            console.log(`You took a slice off the cake and now there are ${this.slices} left.`);
        }else{
            console.log(`No more cake left :( let's get another one!`);
        }
    }

    public cakeInfo(){
        console.clear();
        console.log('\n######## CAKE INFO ########\n');
        console.log(`Flavour: ${this.flavour}`);
        console.log(`Icing flavour: ${this.icing}`);
        console.log(`Size: ${this.size}cm`);
        console.log(`Shape: ${this.shape}`);
        console.log(`Price: $${this.price}`);
        if(this.isBaked){
            console.log('This cake has been baked.');
            if(this.isSliced){
                console.log(`It's been cut in ${this.slices} slices.`);
            }
        }
    }


} 