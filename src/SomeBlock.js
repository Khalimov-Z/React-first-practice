import React from 'react';
import BlockDark from "./BlockDark";
import BlockLight from "./BlockLight";

function SomeBlock(props) {

    const dark = true;
  if(dark) {
      return(<BlockDark/>);
   }
      return(<BlockLight/>);
}

export default SomeBlock;