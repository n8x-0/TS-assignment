import inquirer from "inquirer";
let products = [
    {
        name: 'vaccum cleaner',
        price: 125,
        inventory: {
            stock: 43,
            colorOptions: ["red", "blue", "green"]
        }
    },
    {
        name: 'Air conditioned Hoodie',
        price: 420,
        inventory: {
            stock: 33,
            colorOptions: ["red", "black", "white"]
        }
    },
    {
        name: 'jootiyan',
        price: 1599,
        inventory: {
            stock: 2,
            colorOptions: ["transparent", "neeli", "peeli"]
        }
    }
];
//this function is according to given instruction excluding price attribute :) but ig diff price data acc to color should be better to put in database, (in product arr of objects in our case)
const changeColor = (product, color, price) => {
    switch (product) {
        case "vaccum cleaner":
            switch (color) {
                case "transparent":
                    console.log(`${product} of color: ${color}\nprice: ${price * 0.20}`); //20% inc
                    break;
                case "neeli":
                    console.log(`${product} of color: ${color}\nprice: ${price}`);
                    break;
                case "peeli":
                    console.log(`${product} of color: ${color}\nprice: ${price - 200}`);
                    break;
            }
            break;
        case "Air conditioned Hoodie":
            switch (color) {
                case "transparent":
                    console.log(`${product} of color: ${color}\nprice: ${price * 0.20}`); //20% inc
                    break;
                case "neeli":
                    console.log(`${product} of color: ${color}\nprice: ${price}`);
                    break;
                case "peeli":
                    console.log(`${product} of color: ${color}\nprice: ${price - 700}`);
                    break;
            }
            break;
        case "jootiyan":
            switch (color) {
                case "transparent":
                    console.log(`${product} of color: ${color}\nprice: ${price * 0.20}`); //20% inc
                    break;
                case "neeli":
                    console.log(`${product} of color: ${color}\nprice: ${price}`);
                    break;
                case "peeli":
                    console.log(`${product} of color: ${color}\nprice: ${price - 700}`);
                    break;
            }
            break;
    }
};
let lsProducts = products.map(x => x.name);
const ques = await inquirer.prompt({
    name: "product",
    type: "list",
    message: "selct product",
    choices: lsProducts
});
if (ques.product) {
    let selectedProduct = products.find(x => x.name === ques.product);
    const clr = await inquirer.prompt({
        name: "color",
        type: "list",
        message: "choose color",
        choices: selectedProduct.inventory.colorOptions
    });
    await changeColor(ques.product, clr.color, selectedProduct.price);
}
