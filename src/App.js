
import Header from "./Header";
import Blocks from "./Blocks";
import Footer from "./Footer";
import React from "react";
import Zadacha from "./Zadacha";
import Teroperator from "./Teroperator"
import BadComponent from "./BadComponent";
import SomeBlock from "./SomeBlock";
import ParentBlock from "./ParentBlock";

         function App(){
    return(
        <div>
            <ParentBlock/>
            <SomeBlock/>
            <BadComponent />
            <Teroperator hours={19}/>
            <Zadacha/>
            <Header/>
            <Blocks/>
            <Footer/>

        </div>
    );
         }
         export default App;