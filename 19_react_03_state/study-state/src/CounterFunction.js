import {useState} from 'react';

const CounterFunction = (props) => {
    const [number, setNumber] = useState(0); // 숫자의 초기값: 0

    const  plusOne = () => setNumber(number + 1);

    const {value} = props;
    

    return(
        <>
            <h1>{number}</h1>
            <button onClick = {plusOne}>{value}</button>
        </>
    )
}

export default CounterFunction;