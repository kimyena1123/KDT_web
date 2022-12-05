import {useState, useEffect} from 'react';

//자식 컴포넌트
const MyComponent = (props) => {
    const {number} = props; // props는 부모롤부터 데이터를 전달받는다.
    //자식이 props 구조분해할당으로 가져오고 있다.

    useEffect(() => {
        console.log('🙆 mout!');

        //Unmount 시점에 실행된다.
        //why? effect 함수에서 함수를 리턴할 떄는 anmout 시점에 하겠다는 걸 의미한다.
        return () => {
            console.log('X unmount!');
        }
    }, []); //mount 될 때만 동작하도록

    //mount & Unmout 시점에 실행(mount와 unmount 동시에!)
    useEffect(() => {
        console.log('🔆 update!'); //맨 처음 mount 될 떄도 실행된다.
    })

    return(
        <>
            <p>MyComponent {number}</p>
        </>
    )
}

//부모 컴포넌트
const LifeCycleFunc = () => {
    const [number, setNumber] = useState(3);
    const [visible, setVisible] = useState(true);

    const changeNumberState = () => {
        setNumber(number + 1);
    }

    const changeVisibleState = () => {
        setVisible(!visible);
    }

    return(
        <>
            <h1>함수형 컴포넌트에서 lifeCycle 이해하기</h1>
            <button onClick = {changeNumberState}>PLUS</button>
            <button onClick = {changeVisibleState}>ON/OFF</button>
            {visible && <MyComponent number = {number}/>} {/*visible true일 떄만 실행하도록. false이면 안보인다.*/}
            
        </>
    )
}

export default LifeCycleFunc;