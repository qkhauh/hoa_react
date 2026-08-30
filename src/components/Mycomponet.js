 //class component
 //function component

 import React from 'react';//nhúng file react vào file js

 class Mycomponet extends React.Component{
    state = {
        name: "Cau Phen",
        age: 20
    };
    //jsx
    render(){
        return(
            <div>
                <h1>hello SKIBIDI</h1>
                {this.state.name}
            </div>
        );
    }
}

export default Mycomponet;