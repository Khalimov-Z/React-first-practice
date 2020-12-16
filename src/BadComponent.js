import React from 'react';

function BadComponent(props) {

    return(
        <div>
            {props ? "первый текст" : "второй текст"}
        </div>
    );
    //Выполняется 2 часть  тер.оператора ("первый текст"),так как 1 часть условие
    //(props) всегда истина.
}

export default BadComponent;


