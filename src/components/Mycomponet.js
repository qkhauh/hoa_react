import AddUserinfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';
//class component
 //function component

 import React from 'react';//nhúng file react vào file js

 class Mycomponet extends React.Component{
    state = {
        listuser: [
            {id: 1, name: "Cau Phen", age: 16},
            {id: 2, name: "Adudu", age: 21},
            {id: 3, name: "TonKhanhLuu", age: 22}
        ]
    };    

    //ThemphantuTrungKien
    chuyentuchasangcon = (userObj) => {
        // let listusernew = this.statea.listuser;
        // listusernew.unshift(userObj);
        // this.setState({
        //     listuser: listusernew
        // });
        this.setState({
            listuser: [userObj, ...this.state.listuser]
        });
    }

    xoaphantu = (userId) => {
        let listuserclone = this.state.listuser;
        listuserclone = listuserclone.filter(user => user.id !== userId);
        this.setState({
            listuser: listuserclone
        });
    }

    //jsx
    render(){
        const test = 'hoidanit'

        // const mya
        return(
            <>
                {test}
                <div className='a'>
                
                    <AddUserinfor chuyenData={this.chuyentuchasangcon}/>
                    <DisplayInfor listuser={this.state.listuser} xoaphantu={this.xoaphantu}/>
                
                </div>
            </>
        );
    }
}

export default Mycomponet;