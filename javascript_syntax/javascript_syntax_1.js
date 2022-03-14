let data = [90,80,96,92,100];
let sum = 0, average = 0;

for(let i = 0; i < data.length; i++){
    sum += data[i];
}

average = sum/data.length;
console.log("the sum is: " + sum + "; the average is: " + average);
