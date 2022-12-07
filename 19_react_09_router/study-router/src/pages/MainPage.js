import { useSearchParams } from "react-router-dom";

const MainPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('mode')); //처음에는 null, 버튼 누르면 Dark 출력됨.
    

    return(
        <main className={["MainPage", searchParams.get('mode')].join(' ')}>
            {/* 
                console.log(['MainPage', 'Dark'].join(' '))
                console.log(['MainPage', null].join(' '))
                console.log(['010', '1234', '2345'].join('-'))
             */}
             
            <div>여기는 홈!</div>

            <button onClick = {() => {
                setSearchParams({mode: 'Dark'});
            }}>Dark Model</button>
        </main>
    )
}

export default MainPage;