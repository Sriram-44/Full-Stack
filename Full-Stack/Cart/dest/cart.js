"use strict";
const shoppingcart = [];
function addp(cartt) {
    shoppingcart.push(cartt);
}
function buy(cartt, quantity) {
    cartt.stock = cartt.stock - quantity;
}
let c1 = { pid: 1, pname: "fridge", price: 10000, stock: 5 };
addp(c1);
let c2 = { pid: 2, pname: "tv", price: 5000, stock: 10 };
addp(c2);
for (let i = 0; i < shoppingcart.length; i++) {
    console.log("pid:" + shoppingcart[i].pid);
    console.log("pname:" + shoppingcart[i].pname);
    console.log("price:" + shoppingcart[i].price);
    console.log("stock:" + shoppingcart[i].stock);
    console.log("");
}
buy(c1, 2);
console.log("after buying.........");
for (let j = 0; j < shoppingcart.length; j++) {
    console.log("pid:" + shoppingcart[j].pid);
    console.log("pname:" + shoppingcart[j].pname);
    console.log("price:" + shoppingcart[j].price);
    console.log("stock:" + shoppingcart[j].stock);
    console.log("");
}
//# sourceMappingURL=cart.js.map