import './Book.css';

const Book = (props) => {
    console.log(props);

    return(
        <div id = "container">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOrlOf27XRazXvQQQZQlG2It6e8CdVDQN6A&usqp=CAU"/>
            <h1>{props.title}</h1>
            <h4>저자: {props.author}</h4>
            <h4>판매가: {props.price}</h4>
            <h4>구분: {props.type}</h4>
        </div>
    )
}
export default Book;