import {useState} from 'react';

const NumberTest = () => {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);
    };

    const alertMsg = (msg) => {
        alert(msg);
    }

    const alertMsg2 = (evt, msg) => {
        console.log(evt); //button
        console.log(evt.target); // button의 target : value(메세지 띄우기2)가 나온다.
        alert(msg);
    }

    return(
        <div>
            <h1>Counter</h1>
            <h2>{number}</h2>
            <button onClick = {onIncrease}>더하기</button>

            <h1>Alert</h1>
            {/*<button onClick = {alertMsg('helloooo')}>메세지 띄우기</button>*/}
            <button onClick = {() => alertMsg('helloooo')}>메세지 띄우기1</button> {/* 익명함수로 보내기*/}
            <button onClick = {(e) => alertMsg2(e, 'bye')}>메세지 띄우기2</button>
        </div>
    )
}

export default NumberTest;