import {useState} from 'react';
import './ShowHide.css';

const ShowHide = () => {
    const [text, setText] = useState('사라져라');
    const [text2, setText2] = useState('안녕하세요');
    console.log(text);
    console.log(text2)

    const style = {
        text: {
            display : "none",
        }
    }

    const clickBtn = () => {
        if(text === '사라져라'){ // 글씨가 사라져라 라고 한다면 공백으로
            setText('보여라');
            setText2(' ');
        }
        if(text === '보여라'){ // 그게 아니라면 
            setText('사라져라');
            setText2('안녕하세요');
        }
    }

    return(
        <div>
            <button onClick = {clickBtn} className = "hideshow">{text}</button>
            <h1 className='text'>{text2}</h1> 
        </div>
    )
}

export default ShowHide;


/*
import { useState } from 'react';
const Prob50 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {// <h1>{visible ? '안녕하세요' : ''}</h1>
      <h1>{visible && '안녕하세요'}</h1>
      <button onClick={() => setVisible(!visible)}>
        {visible ? '사라져라' : '보여라'}
      </button>
    </div>
  );
};

export default Prob50;
*/