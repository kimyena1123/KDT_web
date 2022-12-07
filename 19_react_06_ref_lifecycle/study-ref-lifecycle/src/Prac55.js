import React, { useEffect, useState } from "react";
import Prac53Item from "./Prac53Item";

//가짜 데이터
const fakePosts = [
    {
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
    },
    {
      id: 4,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
    },
    {
      id: 5,
      title: 'nesciunt quas odio',
      body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque',
    },
    {
      id: 6,
      title: 'dolorem eum magni eos aperiam quia',
      body: 'ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae',
    },
    {
      id: 7,
      title: 'magnam facilis autem',
      body: 'dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas',
    },
    {
      id: 8,
      title: 'dolorem dolore est ipsam',
      body: 'dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae',
    },
    {
      id: 9,
      title: 'nesciunt iure omnis dolorem tempora et accusantium',
      body: 'consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas',
    },
    {
      id: 10,
      title: 'optio molestias id quia eum',
      body: 'quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error',
    },
];


const Prac55 = () => {
    //1.
    //posts는 현재 빈배열 상태.
    const [posts, setPosts] = useState([]);

    //2.
    //getPosts함수
    const getPosts = () =>{
        //위 빈 배열 상태인 posts에 가짜 데이터 fakeposts의 내용을 넣기위해.
        //setPosts를 통해 posts에 fakePosts를 넣음으로써 posts에 10개의 원소가 담긴다.
        setPosts(fakePosts); // posts = fakePosts 라고 생각하자.
        //즉, const [posts, setPosts] = useState([fakePosts])

        //setPosts(fakePosts)를 통해 지금 posts는 10개의 원소가 담겨있는 상태이다.
    }

    //3.
    //처음 컴포넌트가 Mount 된 시점에 2초 기다렸다가 getPosts를 보여주기.
    useEffect(() => { //Mount만 실행
        
        //2초 기다렸다가 getPosts 함수 실행시키기 => 2초 기다렸다가 setPosts를 작동.
        setTimeout(()=> {

            getPosts(); // 함수 실행 => 이 함수 실행으로 인해 posts에 fakePosts가 들어간다.

        }, 2000)
    }, [])

    return(
        <div className="Prac55">
            <header>🎁Post List🎁</header>

            {/* p = {id: 1, title: ~~~, body: ~~~} */}
            {posts.length == 0 ? <h2>loading...</h2> : posts.map((p) => {
                return <Prac53Item key = {p.id} post = {p} />
                //post = {p} 여기서 p는 posts를 새로운 변수 p에 담은 것.
                //post는 Prac53Item에 넘길 변수 이름으로 Prac53Item에서 보면 post를 사용한다.
            })}

            

        </div>
    )
}

export default Prac55;