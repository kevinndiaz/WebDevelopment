let objs = document.getElementsByName("input");

for(let i of objs){
    i.style.color = "red";
    i.innerHTML.replace()
}

function isEmpty(input){
    if(input.value.length == 0){
        document.input.style.background = "red";
    }
}

function validateForm(){
    var x = document.getElementsByTagName("textarea")
    for(let i of x){
        console.log(i.textContent);
    }
}