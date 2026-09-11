import React, {useState} from 'react';//nhúng file react vào file js
import './DisplayInfor.scss';
import logo from '../logo.svg';

// class DisplayInfor extends React.Component {
    
//     render() {
//         const { listuser } = this.props;
//         return (
//             <div className='display-infor-container'>
//                 {true &&
//                     <div>
//                         {listuser.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age < 18 ? "red" : "green"}>
//                                     <div>my name is {user.name}</div>
//                                     <div>and my age is {user.age}</div>
//                                     <hr />
//                                     <div>
//                                         <button onClick={() => this.props.xoaphantu(user.id)}>Xóa</button>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//             </div>
//         )
//     }
// }
const DisplayInfor = (props) => {
        const { listuser, xoaphantu } = props;

        const [isShowHideListUser, setShowHideListUser] = useState(true);

        const handleShowHideListUser = () => {
            setShowHideListUser(!isShowHideListUser);
        }
        return (
            <div className='display-infor-container'>
                <div>
                    <span onClick={()=>handleShowHideListUser()}>
                        {isShowHideListUser === true ? 'hide list user' : 'show list user'}
                    </span>
                </div>
                {isShowHideListUser && 
                    <div>
                        {listuser.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age < 18 ? "red" : "green"}>
                                    <div>my name is {user.name}</div>
                                    <div>and my age is {user.age}</div>
                                    <hr />
                                    <div>
                                        <button onClick={() => xoaphantu(user.id)}>Xóa</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }

export default DisplayInfor;