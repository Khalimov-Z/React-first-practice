import React from 'react';

function Zadacha(props)
//Задача №-1
{
    const array = [22, 0, -45, 100, 1, 8, -6, -0.1, 101,
    2.5, -55555
    ];
    const positive = array.filter((i)=> i >= 0);
    const newpositive = positive.map((i)=> <div><button>{i}</button></div>);
    //Задача №-2

    // Напиши фильтр, который пропустит только те элементы (объекты),
    // у которых свойство error равно false. Выведи полученный результат в консоль.

    const messages = [
        {message: 'hello', error: true},
        {message: 'javascript', error: false},
        {message: 'intocode', error: true},
        {message: 'react', error: true},
        {message: 'angular', error: false},
        {message: 'es6', error: false},
    ];
    const newmessages = messages.filter(function (item){
       if (item.error === false){
           return true;
       }
       return false;
    });
    console.log({newmessages});
    //Стрелочная функция
    const newmessages2 = messages.filter((i)=>i.error===false);
    console.log(newmessages2);
    ///////////////////////////////

    //Задача №-3
    // Используя метод .map создай новый массив,
    // где слова короче пяти символов заменены на звездочку.
    const words= ['intocode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];
    const newwords = words.map(function (item){
        if(item.length>=5){
            return <b>{item}</b>;
        }
        return ('*');
    } );
//////////////////////////////
    //Задача №-4
    //Измени следующие функцию на стрелочные

    function sendMessage(message) {
       return message * 1
    }
  // const sendMessage = (message)=> message * 1; //cтрелочная ф-я;
///////////////////

     function half(number) {
        return number / 2;
   }
  // const half =(number)=>number / 2; //cтрелочная ф-я;
  ////////////

    function showConsole() {
        console.log('intocode');
    }
    showConsole()
// const showConsole = () =>  console.log('intocode'); //cтрелочная ф-я;
//     showConsole()
    ///////////////

    function concatWords(first, second) {
        return first + second;
    }
  concatWords(2,312)

    // const concatWords = (first, second) =>first + second;  //cтрелочная ф-я;

    //Задача №-5
    //Измени следующие функции из стрелочных в обычные
    const justText = () => 'intocode';

    // function justText(){
    //     return 'intocode';  //Обычная ф-я;
    // }
    ////////////////////
    const logging = text => console.log(text);
    logging('fsf');

    // function logging (text){
    //     return console.log(text);  //Обычная ф-я;
    // }
    //////////////////

    const add = (x,y) => {
        const z = 3;

        return z * x * y;
    }

    // function add(x,y){
    //     const z = 3;          ////Обычная ф-я;
    //     return z * x * y;
    // }
    //////////////////

    const onlyPositive = (number) => {
        if(number < 0) {
            return false;
        }

        return true;
    }
   console.log( onlyPositive(2))

    // function onlyPositive(number){
    //     if(number < 0) {
    //         return false;           //Обычная ф-я;
    //     }
    //     return true;
    // }
    // console.log( onlyPositive(-1))
    return (
        <>
            <div>{}</div>
            <div>{newwords}</div>
        <div>{newpositive}</div>
        </>
    );
}

export default Zadacha;