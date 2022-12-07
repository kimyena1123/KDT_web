import {useRef, useState} from 'react';

const Prac53 = () => {
    const writer = useRef();
    const title = useRef();
    //1
    const [inputWriter, setInputWriter] = useState(''); // input id = "write"
    const [inputTitle, setInputTitle] = useState(''); // input id = "title"
    const [inputSearch, setInputSearch] = useState('');

    //2 //5
    const addComment = () => {
        console.log('btn CLick');
        //1. comments statㄷ에 추가할 원소 만들기
        // {writer: xxx, title: xxx}
        let newComent = {writer: inputWriter, title: inputTitle}; // 내가 쓴 input창 내용들을 넣어준다.
        console.log(newComent);
        
        if(inputWriter === ''){
            writer.current.focus();
        }
        else if(inputTitle === ''){
            title.current.focus();
        }
        else{
            //2. 원소를 comments state에 추가히기 = state 변경
                //...comments: 기존 state 배열의 모든 원소
                //newComment: 새로 추가될 state 배열의 원소
                // [...comments, newComment]: 변경된 state 배열
            setComments([...comments, newComent]) // ...기존원소, )
    
            //3.input 초기화
            setInputWriter('');
            setInputWriter('');
        }
    }
    
    const searchResult = () => {
        console.log(value);
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
                <input ref = {writer} type = "text" id = "writer" value = {inputWriter} onChange = {(e) => setInputWriter(e.target.value)}/>
                
                <label htmlFor='title'>제목</label>
                <input ref = {title}type = "text" id = "title" value = {inputTitle} onChange = {(e) => setInputTitle(e.target.value)}/>
                
                <button type = "button" onClick = {addComment} >작성</button>
            </form>

{/* 버튼을 누르면 input창에 입력되어 있는 값(e.target.value)을 가지고 filter를 이용해 기존에 있는 배열에다가 특정 문자열(내가 입력한 input값)을 시로운 배열에 저장 */}
{/* 새 변수들을 담는 새로운 배열 =  기본배열(comments).filter((기존 배열에서 꺼낸 값을 담을 새 변수 이름) => {return 새 변수이름.includes('e.target.value')}) */}
{/* 새로운 table을 만든다. (처음에는 아무것도 저장되어 있지 않는 table => 보이지 않는다.)*/}
{/* 검색한 결과로 내가 입력한 값이 기존 배열에 들어있다면, includes되어 있다면 => true로 반환. 아니라면 false로 반환. */}
{/* true(값이 있다면) => "h2태그"(noSearch-검색결과 없음)을 없앤다. false(값이 없다면)=> 그대로 유지 or 글자색을 빨간색으로 바꾸기*/}
            <select>
                <option value = "user_writer">작성자</option>
                <option value = "user_title">제목</option>
            </select>

            <input type = "text" value = {inputSearch} onChange = {(e) => setInputSearch(e.target.value)} placeholder='검색어'></input>
            <button type = "button" onClick = {searchResult}>검색</button>

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

            <h2 className='noSearch'>검색 결과가 없습니다.</h2>
        </>
        
    )
}


export default Prac53;