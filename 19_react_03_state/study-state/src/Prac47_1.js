import React from 'react';
import {useState} from 'react';

class Prac47_1 extends React.Component{
    state = {
        number: 0,
    }

    
    render(){
        const {number} = this.state;

        return(
            <div>
                <h1>실습47-1</h1>
                <h1>{number}</h1>
                <button onClick = {() => this.setState({number: number + 2})}>+2</button><br></br>
                <button onClick = {() => this.setState({number: number - 1})}>-1</button> 
            </div>
        )
    }
}

export default Prac47_1;