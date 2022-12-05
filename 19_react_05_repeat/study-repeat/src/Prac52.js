import './Prac52.css';
import {useState} from 'react';

const Prac52 = () => {
    const [tables, setTables] = useState([
        //{id: 0, title: '제목1', user: 'user1'},
    ]);
    console.log(tables);

    const [inputName, setInputName] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [nextId, setNextId] = useState(1);

    const addTable = () =>{
        //기존의 tables라는 state에 새로 입력된 input값들 추가하기
        const newText = tables.concat({id: nextId, title: inputTitle, user: inputName});
        setNextId(nextId + 1); // 다음 항목 id를 위해 1증가
        setTables(newText); // tables state에 newTest 추가
        //input창 초기화
        setInputName(' ');
        setInputTitle(' ');
    }

    const deleteTable = (id) => {
        const result = tables.filter((a) => a.id !== id);
        setTables(result);
    }

    return(
        <div>
            <form action="tables">
            <label for = "user_name">작성자 : </label>
            <input type = "text" id = "user_name" value = {inputName} onChange = {(e) => setInputName(e.target.value)}></input>

            <label for = "title">제목 : </label>
            <input type = "text" id = "title" value = {inputTitle} onChange = {(e) => setInputTitle(e.target.value)}></input>

            <button onClick = {addTable}>작성</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {tables.map((a) => {
                        //즉, a = {id: 0, title: 'title1', user: 'user1'}
                        return(
                            <tr key = {a.id} onDoubleClick={() => {deleteTable(a.id);}}>
                                <td>{a.id}</td>
                                <td>{a.user}</td>
                                <td>{a.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Prac52;