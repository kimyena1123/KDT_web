import {useState} from 'react';

const Prac52_sean = () => {
    //1
    const [inputWriter, setInputWriter] = useState(''); // input id = "write"
    const [inputTitle, setInputTitle] = useState(''); // input id = "title"

    //2 //5
    const addComment = () => {
        console.log('btn CLick');
        //1. comments statㄷ에 추가할 원소 만들기
        // {writer: xxx, title: xxx}
        let newComent = {writer: inputWriter, title: inputTitle}; // 내가 쓴 input창 내용들을 넣어준다.
        console.log(newComent);

        //2. 원소를 comments state에 추가히기 = state 변경
            //...comments: 기존 state 배열의 모든 원소
            //newComment: 새로 추가될 state 배열의 원소
            // [...comments, newComment]: 변경된 state 배열
        setComments([...comments, newComent]) // ...기존원소, )

        //3.input 초기화
        setInputWriter('');
        setInputWriter('');
    }

    //3. - comment list state
    const [comments, setComments] = useState([
        {writer: 'user1', title: 'title1'},
        {writer: 'user2', title: 'title2'},
        {writer: 'user3', title: 'title3'},
        // + newComment
    ])

    
    
    return(
        <>
            <form>
                <label htmlFor='writer'>작성자</label>
                <input type = "text" id = "writer" value = {inputWriter} onChange = {(e) => setInputWriter(e.target.value)}/>
                
                <label htmlFor='title'>제목</label>
                <input type = "text" id = "title" value = {inputTitle} onChange = {(e) => setInputTitle(e.target.value)}/>
                
                <button type = "button" onClick = {addComment}>작성</button>
            </form>

            <table border = "1" style = {{margin: '30px auto', width: '500px'}}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>

                <tbody>
                    {/* 4. */}

                    {comments.map((a, idx) => { // a = {writer: 'user1', title: 'title1'}, ...
                        return(
                            <tr key = {idx + 1}>
                            <td>{idx + 1}</td>
                            <td>{a.title}</td>
                            <td>{a.writer}</td>
                        </tr>
                        )
                    })}
                   
                </tbody>

            </table>
        </>
        
    )
}


export default Prac52_sean;