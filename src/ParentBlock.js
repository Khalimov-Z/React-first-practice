import React from 'react';
import Large from "./Large";
import Small from "./Small";
function ParentBlock(props) {
    const honor = 66;
    if (honor < 50){
        return (<Small />);
    }
        return (<Large />);
}

export default ParentBlock;