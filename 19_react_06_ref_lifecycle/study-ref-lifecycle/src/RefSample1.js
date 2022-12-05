import {useRef} from 'react';

const RefSample1 = () => {
    //1. ref 객체 만들기
    const inputRef = useRef();

    const handleFocus = () => {
        //3. ref 객체의 current 속성의 실제 요소를 가르킴.
        console.log('inputRef >> ', inputRef); //{current: input} -> =수많은 객체들ㄴㄴ
        console.log('inputRef.current >> ', inputRef.current); //<input type="text" placeholder="Enter somthing">

        inputRef.current.focus(); // input에다가 focus 기능을 주기
    }

    const handleDisabled = () => {
        inputRef.current.disabled = true;
    }

    return(
        <>
            <p>함수형 컴포넌트에서 버튼 클릭시 input focus 기능 구현</p>

            {/*2. 선택하고 싶은 HTML element에 ref prop(ref 속성) 걸어준다. */}
            <input ref = {inputRef} type = "text" placeholder='Enter somthing'/>
            <button onClick={handleFocus}>FOCUS</button>
            <button onClick={handleDisabled}>DISABLED</button>
        </>
    )
}

export default RefSample1;