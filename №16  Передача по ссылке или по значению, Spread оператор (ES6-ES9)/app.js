'use strict'

let a = 5,
    b = a
b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a : 5,
    b : 1
}

// const copy = obj; //Ссылка
// copy.a = 10;

// console.log(copy);
// console.log(obj);

//2
function copy(mainObj){
    let objCopy = {};

    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}


const number = {
    a : 2,
    b : 5,
    c : {
        x : 7,
        y : 4
    }
}

const NewNumbers = copy(number);
NewNumbers.a = 10;
NewNumbers.c.x = 10; // поверхностная копия объекта
console.log(NewNumbers);
console.log(number);

// Как связать два объекта или добавить в объект объект

const add ={
    d : 17,
    e : 20
}
//Object.assign(number, add);
//console.log(number);
//console.log(Object.assign(number, add));

const clone = Object.assign({}, add)

// clone.d = 20;
// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c', 'd'];
const newArray = oldArray.slice();

newArray[1] = 'kfnknkgng';
console.log(newArray);
console.log(oldArray);

//разварот ES6-ES9 spret оператор
//
const video = ['youtube', 'vioe', 'hjkjuu'],
      bloge = ['wordpress', 'livejornal', 'blogger'],
      internet = [...video, ...bloge, 'vk', 'facebook']

console.log(internet);

//Сложный пример 
function log(a, b, c){//Функция не пинемает массив
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [1, 4, 5]
log(...num);

//3 spret оператор
const array = ["a", "b"];
const newArray = [...array];
console.log(newArray);

//obj
const q = {
    one : 1,
    two : 2
};
const newObj = {...q, bhf : 'jdbj'};
console.log(newObj);