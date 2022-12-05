import {useRef, useState} from 'react';

const RefSample2 = () => {
    const id = useRef(1); //ref 객체 만들기. 안에 기본값으로 1 설정

    const plusId = () => {
        //2. ref.current를 로컬 변수로 사용.
        id.current += 1;
        console.log(id.current);
    };

    //################################
    const [idx, setIdx] = useState(1);

    const plusIdx = () => {
        setIdx(idx + 1);
    }

    return(
        <>
            <h1>Ref: {id.current}</h1>
            <button onClick = {plusId}>PLUS Ref</button>
            <h1>State: {idx}</h1>
            <button onClick = {plusIdx}>PLUS Ref</button>
        </>
    )
}

export default RefSample2;