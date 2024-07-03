type cart={
    pid:number,
    pname:string,
    price:number,
    stock:number,
  }
  
  const shoppingcart:cart[]=[];
  
  function addproduct(product: cart):void
  {
    shoppingcart.push(product);
  
  }
  function buyproduct(product:cart,quantity:number):void
  {
    product.stock=product.stock-quantity;
  }
  
  let c1={pid:1,pname:"fridge",price:10000,stock:5}
  addproduct(c1);
  let c2={pid:2,pname:"tv",price:5000,stock:10}
  addproduct(c2);
  for (let i=0;i<shoppingcart.length;i++){
    console.log("pid:"+shoppingcart[i].pid);
    console.log("pname:"+shoppingcart[i].pname);
    console.log("price:"+shoppingcart[i].price);
    console.log("stock:"+shoppingcart[i].stock);
    console.log("");
  }
  buyproduct(c1,2);
  console.log("after buying.........");
  for (let j=0;j<shoppingcart.length;j++){
  console.log("pid:"+shoppingcart[j].pid);
  console.log("pname:"+shoppingcart[j].pname);
  console.log("price:"+shoppingcart[j].price);
  console.log("stock:"+shoppingcart[j].stock);
  console.log("");
  }
  