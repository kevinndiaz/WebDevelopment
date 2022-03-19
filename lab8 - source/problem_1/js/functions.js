/* define your functions here */

function calculateTotal(quantity, price){
    return quantity * price;
}

function outputCartRow(image, item, quantity, price, total){
    document.write(
        "<tr>\n" +
        "<td><img src=images/" + image + "></td>\n" +
        "<td>" + item + "</td>\n" +
        "<td>" + quantity + "</td>\n" +
        "<td>$" + price.toFixed(2) + "</td>\n" +
        "<td>$" + total.toFixed(2) + "</td>\n" +
        "</tr>\n"
    );
}

function outputReceipt(){
    document.write(
        "<tr class='totals'>\n" +
        "<td colspan='4'>Subtotal</td>\n" +
        "<td>$" + subTotal.toFixed(2) + "</td>\n" +
        "</tr>\n" +

        "<tr class='totals'>\n" +
        "<td colspan='4'>Tax</td>\n" +
        "<td>$" + parseInt(tax_rate).toFixed(2) + "</td>\n" +
        "</tr>\n" +

        "<tr class='totals'>\n" +
        "<td colspan='4'>Shipping</td>\n" +
        "<td>$" + parseInt(shipping_threshold).toFixed(2) + "</td>\n" +
        "</tr>\n" +

        "<tr class='totals'>\n" +
        "<td colspan='4'>Grand Total</td>\n" +
        "<td class='focus'>$" + grandTotal.toFixed(2) + "</td>\n" +
        "</tr>\n"
    );
}





        
