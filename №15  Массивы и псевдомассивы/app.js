"use strict"

// const arr = [1, 2, 3, 4, 5, 6];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);


// arr.pop();
//console.log(arr);

// arr.push(10);
// console.log(arr);

// //как перебрать массив 
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// //как перебрать массив второй способ
// for (let value of arr){
//     console.log(value);
// }

const str = prompt("", "");
const product = str.split(", ");
product.sort();
console.log(product.join("; "));



const arr = [5, 61, 24, 11, 2];
arr.sort(compareNum);

function compareNum(a, b){
    return a - b;
}

console.log(arr);





