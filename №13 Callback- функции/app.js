function first(){
    setTimeout(function(){
        console.log(1);
    },500);
};

function second(){
    console.log(2);
};

first();
second();


//Collback
//1
function doHomeWork(subject, collback){
    alert(`Starting my ${subject} homework`);
    collback();
};

doHomeWork('math', function(){
    alert('Finish my homework');
});
//2
function learnJs(lang, collback){
    alert(`I'm learn ${lang}`);
    collback();
};

function done (){
    alert('Я прошел этот урок!')
};

learnJs('Js', done);



