const inventory = [];

function findProductIndex (name) {
  for(let i = 0; i < inventory.length; i++) {
    if(inventory[i].name.toLowerCase() === name.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

function addProduct(product) {
  const index = findProductIndex(product.name);

  if (index >= 0) {
    inventory[index].quantity += product.quantity;
    console.log(product.name.toLowerCase() + " quantity updated");
  } else {
    inventory.push({ 
      name: product.name.toLowerCase(), 
      quantity: product.quantity 
    });
    console.log(product.name.toLowerCase() + " added to inventory");
  }
}

function removeProduct(productName, amount) {
  const index = findProductIndex(productName);
  if (index === -1) {
    console.log(productName.toLowerCase() + " not found");
  } else {
    const product = inventory[index]; 
    if (product.quantity >= amount) {
      product.quantity -= amount;
      if (product.quantity === 0) {
        inventory.splice(index, 1);
      }
      console.log(`Remaining ${productName.toLowerCase()} pieces: ${product.quantity}`);
    } else {
      console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${product.quantity}`);
    }
  }
}
