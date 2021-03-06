//Задании 
let number0fFilms;
console.log(number0fFilms = prompt("Сколько фильмов вы уже посмотрели ?"));


let personalMovieDM = {
    count : number0fFilms,
    movie : {},
    actors: {},
    gennres:[],
    privat: false

}
const a = prompt("Один из просмотренных  фильмов?"),
      b = prompt("Насколько оцените его"),
      c = prompt("Один из просмотренных  фильмов?"),
      d = prompt("Насколько оцените его");

personalMovieDM.movie[a] = b;
personalMovieDM.movie[c] = d;

console.log(personalMovieDM);


//document.write(`My name is aidana`);



