import {useState} from 'react';

const SyntheticEvent = () => {
    const [text, setText] = useState('초기값'); //초기값은 빈값.
    //setText로 text를 변경 or 설정할 수 있다.
    const setInputValue = (e) => setText(e.target.value); //e만 찍어서 보기. 그냥 value는 없다. target 안에 value가 있다.
    const showAlert = (e) => {
        alert(`input 입력값: ${text}`);
        setText(' '); // value는 text. text는 초기값. 이를 setText로 설정. 그 setText를 공백으로 지정.
    }
    const EnterInput = (e) => {
        if(e.key === 'Enter'){
            showAlert();
        }
    }

    return(
        <div>
            <button onClick = {(e) => console.log(e)}>SyntheticEvent 확인</button>
            <br />
            <br />
            <input type = "text" placeholder="입력하세요" onChange = {setInputValue} onKeyPress = {EnterInput} value = {text}/> {/* text = 초기값 */}
            <button onClick = {showAlert}>버튼</button> {/*showAlert()라는 함수*/}
        </div>
    )
}

/*
const SyntheticEvent = () => {

    return(
        <div>
            <button onClick = {(e) => console.log(e)}>SyntheticEvent 확인</button>
        </div>
    )
}
*/

/*
const SyntheticEvent = () => {
    const printSysntheticEvent = (e) => console.log(e);

    return(
        <div>
            <button onClick = {printSysntheticEvent}>SyntheticEvent 확인</button>
        </div>
    )
}
*/

export default SyntheticEvent;