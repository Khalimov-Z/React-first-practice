import React from 'react';

//Задача №-1
//Как его нужно вызвать, чтобы он вывел текст “сейчас вечер”?
function Teroperator(props) {
        const isDay = props.hours < 18;

        return(isDay ? "сейчас день": "сейчас вечер")

}

export default Teroperator;