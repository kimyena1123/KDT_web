import {useState} from 'react';

const Prac47_2 = () => {
    const [number, setNumber] = useState(0);

    const Increase = () => setNumber(number + 1);
    const Decrease = () => setNumber(number - 2);

    return(
        <>
            <h1>실습47-2</h1>
            <h1>{number}</h1>
            <button onClick = {Increase}>일 더하기</button>
            <button onClick = {Decrease}>이 빼기</button>
        </>
    )
}

export default Prac47_2;