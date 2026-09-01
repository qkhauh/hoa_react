import Userinfor from './Userinfor';
import DisplayInfor from './DisplayInfor';
//class component
 //function component

 import React from 'react';//nhúng file react vào file js

 class Mycomponet extends React.Component{
    statea = {
        listuser: [
            {id: 1, name: "Cau Phen", age: 20},
            {id: 2, name: "Adudu", age: 21},
            {id: 3, name: "TonKhanhLuu", age: 22}
        ]
    };    
    //jsx
    render(){
        // const mya
        return(
            <div>
                <Userinfor/>
                <DisplayInfor 
                listuser={this.statea.listuser}/>
            </div>
        );
    }
}

export default Mycomponet;