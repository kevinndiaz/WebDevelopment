
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

let subTotal = 0;
let grandTotal = 0;

for(let i = 0; i < cart.length; i++){
   let total = calculateTotal(cart[i].quantity, cart[i].product.price);
   outputCartRow(cart[i].product.filename, cart[i].product.title, cart[i].quantity, cart[i].product.price, total);
   subTotal += total
}

grandTotal = subTotal + parseInt(tax_rate) + parseInt(shipping_threshold);

outputReceipt();