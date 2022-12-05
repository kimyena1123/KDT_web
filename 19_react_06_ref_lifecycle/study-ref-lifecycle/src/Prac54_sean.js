import {useRef, useState} from 'react';

const Prac54_sean = () => {
    const writerInputElem = useRef();
    const TitleInputElem = useRef();
    //1
    const [inputWriter, setInputWriter] = useState(''); // input id = "write"
    const [inputTitle, setInputTitle] = useState(''); // input id = "title"

    //2 //5

    const checkInputValue = () => {
        console.log('btn CLick');
        
        console.log(inputWriter.trim().length);
        console.log(inputTitle.trim().length); 

        if(inputWriter.trim().length < 1){
            //input foucs
            writerInputElem.current.focus();
            
            return false;
        }
        if(inputTitle.trim().length < 1){
            TitleInputElem.current.focus();

            return false;
        }

        return true;
    }


    const addComment = () => {
        if(!checkInputValue()){
            return; 
        }

        let newComent = {writer: inputWriter, title: inputTitle}; 
        console.log(newComent);

        setComments([...comments, newComent]) 

        //3.input 초기화
        setInputWriter('');
        setInputTitle('');

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
                <input ref = {writerInputElem} type = "text" id = "writer" value = {inputWriter} onChange = {(e) => setInputWriter(e.target.value)}/>
                
                <label htmlFor='title'>제목</label>
                <input ref = {TitleInputElem} type = "text" id = "title" value = {inputTitle} onChange = {(e) => setInputTitle(e.target.value)}/>
                
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


export default Prac54_sean;