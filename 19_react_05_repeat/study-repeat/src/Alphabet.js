import {useState} from 'react';

const Alphabet = () => {
    //배열(state)에 고유 id를 갖도록 설정
    const [alphabets, setAlphabets] = useState([
        {id : 1, alpha: 'k'},
        {id : 2, alpha: 'd'},
        {id : 3, alpha: 't'},
        {id : 4, alpha: '3'},
        {id : 5, alpha: 'r'},
        {id : 6, alpha: 'd'},
    ]); 
    console.log(alphabets); //Array(6) =  ['k', 'd', 't', '3', 'r', 'd']

    const [inputAlpha, setInputAlpha] = useState('');
    const [nextId, setNextId] = useState(7); ///새로운 항목 추가를 위한 id 값
    
    const addAlpha = () => {
        // 기존의 aplhabets 라는 state에 새로 입력된 input 값 추가하기
        const newText = alphabets.concat({id: nextId, alpha: inputAlpha});
        setNextId(nextId + 1); // 다음 항목 id를 위해 1 증가
        setAlphabets(newText); // alphabets state에 newAlpha 추가
        setInputAlpha(' '); // input창 초기화
    }

    const deleteAlpha = (id) => {
        console.log('>>> ', id);

        const result = alphabets.filter((a) => a.id !== id); 
        setAlphabets(result);
    }
    
    return(
        <div>
            <input type = "text" value = {inputAlpha} onChange = {(e) => setInputAlpha(e.target.value)} />
            <button onClick = {addAlpha}>ADD</button>


            <ul>
                {alphabets.map((a) => { //a는 지금 객체. 즉, a = {id : 1, alpha: 'k'}, // 쉼표로 구분한다.!!!
                    return <li key={a.id} onDoubleClick={() => { deleteAlpha(a.id);}}>{a.alpha}</li>
                })}
            </ul>
        </div>
    )
}
export default Alphabet;

/*
const Alphabet = () => {
    const [alphabets, setAlphabets] = useState(['k', 'd', 't', '3', 'r', 'd']); 
    console.log(alphabets); //Array(6) =  ['k', 'd', 't', '3', 'r', 'd']
    
    return(
        <div>
            <ul>
                {alphabets.map((a, idx) => { //a = 'k', a = 'd'
                    return <li key = {idx}>{a}</li>
                })}
            </ul>
        </div>
    )
}

export default Alphabet;
*/