import React from 'react';//nhúng file react vào file js

class Userinfor extends React.Component{
    state = {
        name: "Cau Phen",
        age: 20
    };

    onhandage(event){
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
        console.log("name: " + this.state.name + " age: " + this.state.age);
    }
    
    render(){
        return(
            <div>
                 <h1>hello: {this.state.name} my age is {this.state.age}</h1>
                <form onSubmit={(event) => this.onchaform(event)}>
                    <label>Change name:</label>
                    <input type="text" onChange = {(event) => this.onchangename(event)} />
                    
                    <label>Change age:</label>
                    <input type="text" onChange = {(event) => this.onhandage(event)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Userinfor;