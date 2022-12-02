import {useState} from 'react';

const TextColor = () => {
    const [text, setText] = useState('검정색 글씨');
    const [color, setColor] = useState({ color: "black" });

    const changeRedText = () => {
        setText('빨간색 글씨');
        setColor({color : "red"});
    }
    const changeBlueText = () => {
        setText('파란색 글씨');
        setColor({color : "blue"});
    }

    

    return(
        <div>
            <h1 style = {color}>{text}</h1>
            <button onClick = {changeRedText}><span>빨간색</span></button>
            <button onClick = {changeBlueText}><span>파란색</span></button>
        </div>
    )
}

export default TextColor;