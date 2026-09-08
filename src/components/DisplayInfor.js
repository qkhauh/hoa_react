import React from 'react';//nhúng file react vào file js
import './DisplayInfor.scss';
import logo from '../logo.svg';

class DisplayInfor extends React.Component{
    state = {
        click: false
    }
    dongmo = () => {
        this.setState({
            click: !this.state.click
        })
    }
    

    render(){
        const {listuser} = this.props;
        return(
            <div classname='display-infor-container'>
                <img src={logo} alt="logo" className='logo' />
                <div>
                    <span onClick={() =>{this.dongmo()}}>
                        {this.state.click === true ? "dong" : "mo"}
                    </span>
                </div>
                {this.state.click &&
                <div>
                {listuser.map((user, index) => {
                        return(
                            <div key={user.id} className={+user.age < 18 ? "red" : "green"}>
                                <div>my name is {user.name}</div>
                                <div>and my age is {user.age}</div>
                                <hr/>   
                            
                                <div>
                                    <button onclick = {() => this.props.xoaphantu(user.id)}>Xóa</button> 
                                </div>
                            </div>   
                        )
                })}
                </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;