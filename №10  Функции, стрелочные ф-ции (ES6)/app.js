// let num = 20;


// function showFirstMessage(text){
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello world");
// console.log(num);

// function calc(a, b){
//     return(a + b);
// }
// console.log(calc(4, 5))
// console.log(calc(7, 8))
// console.log(calc(2, 8))

// //function decloration
// function ret(){
//     let num = 50;


//     //


//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// //function expression 
// const logger = function(){
//     console.log("Hello World")
// }

// logger();

// //()=>
// // const calc = (a, b) => {
// //     console.log("1");
// //     return a+b;
// // }


// //Замыкание
// function createCalcFunction(n){
//     return function(){
//         console.log(1000*n)
//     }
// }

// const calcs = createCalcFunction(42);
// calcs()

//1

function createIncrimentor(n){
    return function(num){
        return n + num;
    }
}

let addOne = createIncrimentor(1);
const addTen = createIncrimentor(23);

console.log(addOne(10));
console.log(addOne(20));

console.log(addOne(10));
console.log(addTen(41));


//2

function bint(context, fn){
    return function(...args){
        fn.apply(context, args);
    }
}

function logPerson(){
    console.log(`Peson: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name:'Михаил', age:22, job:'Frontend'};
const person2 = {name:'Casha', age:21, job:'SMM'};


bint(person1, logPerson)();
bint(person2, logPerson)();




