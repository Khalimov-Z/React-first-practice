import React from "react";

function Blocks (props){
    return(
        <div>
           <Block title='React' text={w}/>
           <Block title='JavaScript' text={e}/>
           <Block title="Redux" text={b}/>

        </div>
    );
}
export default Blocks;
function Block(props) {
    return (
        <div className='rod-block'>
        <div className='block'>
            <h1 >{props.title}</h1>
            <p className='text'>{props.text}</p>
        </div>
            </div>
    );
}
const w = 'React-самая популярная JavaScript-библиотека.Ежедневно ее загружают миллионы раз';
const e = 'JavaScript-язык программирования для создания клиентской стороны приложения';
const b = 'Redux- позволяет удобным способом управлять состоянием приложения.' +
    'Часто используется совместно с React'