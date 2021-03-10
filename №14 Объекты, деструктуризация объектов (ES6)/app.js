const options = {
    name : 'test',
    width : 1024,
    height : 1024,
    color : {
        border : 'black',
        bg : 'red',
    },
    tilda : function(){
        console.log('Tila');
    }
};

options.tilda();
//Деструктиризация
const{border, bg}= options.color;
console.log(border);

//как вывести только ключи
console.log(Object.keys(options).length);
// options["color"]["bg"]= 'Pete';
// console.log(options);

//console.log(options["color"]["bg"]);

// как удалить элемент из объекта
//delete options["color"]["border"];
//console.log(options["color"]);

// чтобы перебрать объекты используем for
let counter = 0
for (let key in options){
    if(typeof(options[key])=== 'object'){
        for (let i in options[key]){
            console.log(`Свойства ${i} имеет значение ${options[key][i]}`)
            //counter++;
        }
    }else{
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
        counter++;
    }
   //counter++;
};

console.log(counter);







