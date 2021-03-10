//Задании 
let number0fFilms;
console.log(number0fFilms = +prompt("Сколько фильмов вы уже посмотрели ?"));


let personalMovieDM = {
    count : number0fFilms,
    movie : {},
    actors: {},
    gennres:[],
    privat: false

}
// const a = prompt("Один из просмотренных  фильмов?"),
//       b = prompt("Насколько оцените его"),
//       c = prompt("Один из просмотренных  фильмов?"),
//       d = prompt("Насколько оцените его");

// personalMovieDM.movie[a] = b;
// personalMovieDM.movie[c] = d;

//Задание номер №2

for (let i = 0; i < 2; i++){
    //1 - зд
    const a = prompt("Один из просмотренных  фильмов?"),
          b = prompt("Насколько оцените его");
    

    //2 - зд
    if (a != null && b != null && a != '' &&  b !='' && a.length < 50){
        personalMovieDM.movie[a] = b;
        console.log('done');
    }else{
        console.log('Error');
        i--;
    }
}

if (personalMovieDM.count < 10){
    console.log("Просмотрено мало фильмов");
}else if (personalMovieDM.count >= 10 && personalMovieDM.count < 30){
    console.log("Вы класичекий зритель");
}else if (personalMovieDM.count >=30){
    console.log("Вы киноман");
}else {
    console.log("Произошла ошибка");
}





console.log(personalMovieDM);


//document.write(`My name is aidana`);



