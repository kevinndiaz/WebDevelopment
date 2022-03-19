/* define your functions here */

function calculateTotal(quantity, price){
    return quantity * price;
}

function outputCartRow(item, total){
    document.write(
        "<tr class='totals'>\n" +
        "<td colspan='4' class='focus'>" + item + "</td>\n" +
        "<td class='focus'>$" + total + "</td>\n" +
        "</tr>\n"
        
        );
}





        
