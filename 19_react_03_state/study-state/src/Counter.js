//클래스형 컴포넌트에서 state 다루기
import React from 'react';

class Counter extends React.Component{
    //기존버전
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         number: 0,
    //     }
    // }


    //현재버전
    state = {
        number: 5,
    }

    render(){
        //state 데이터는 this.state로 접근 가능.
        const {number} = this.state; // {number : 0}

        return(
            <div>
                <h1>{number}</h1>
                <button onClick = {() => alert(number)}>alerts</button>

                {/* this.setSTate 이용해 state 값 변경 가능 */}
                <button onClick = {() => this.setState({number: 7})}>set Number 7</button>

                <button onClick = {() => this.setState({number: number + 1})}>+ 1</button>
            </div>
        )
    }
}

export default Counter;