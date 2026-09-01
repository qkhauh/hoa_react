import React from 'react';//nhúng file react vào file js

class DisplayInfor extends React.Component{
    render(){
        const { name, age } = this.props;
        return(
            <div>
                My name is {name} and my age is {age}
            </div>
        )
    }
}

export default DisplayInfor;