import React from 'react';//nhúng file react vào file js

class AddUserinfor extends React.Component{
    state = {
        name: "Cau Phen",
        age: 20
    };

    onhandage = (event) => {
        this.setState({
            age: event.target.value
        });
    }

    onchangename = (event) => {        
        this.setState({
            name: event.target.value
        });
    }

    onchaform = (event) => {
        event.preventDefault();
        this.props.chuyenData({
            id: Math.floor((Math.random() * 1000 +1)),
            name: this.state.name,
            age: this.state.age
        });
    }

    render(){
        return(
            <div>
                 <h1>hello: {this.state.name} my age is {this.state.age}</h1>
                <form onSubmit={(event) => this.onchaform(event)}>
                    <label>Change name: </label>
                    <input value={this.state.name} type="text" onChange = {(event) => this.onchangename(event)} />
                    
                    <label>Change age:</label>
                    <input value={this.state.age} type="text" onChange = {(event) => this.onhandage(event)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserinfor;