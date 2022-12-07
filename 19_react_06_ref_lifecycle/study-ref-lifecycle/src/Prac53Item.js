const Prac53Item = (props) =>{

    console.log(props);
    
    const {post} = props;
    //post = {id: 1, title: ~~~, body: ~~~}
    //props
    
    return(
        <div className="Prac53Item"> {/*i번째 돌 때마다 실행 */}
            <div>
                <span className="id">{post.id}</span>
                <span className="title">{post.title}</span>
            </div>
            <p className="body">{post.body}</p>
        </div>
    )
}

export default Prac53Item;