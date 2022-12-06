import React, { useEffect, useState } from "react";
import axios from 'axios';
import PostItem from "./PostItem";
import './styles/PostList.scss';


//가짜 데이터
//https://sonplaceholder.typicode.com/
/*const fakePosts = [
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
]; */





const PostList = () => {
    //빈배열이어야 한다. 현재 posts는 비어있다. 
    const [posts, setPosts] = useState([]); // posts에는 10개의 원소를 가진 배열을 담긴 변수

    //getPosts 함수
    const getPosts = async() => { //10개의 post 정보를 갖도록 posts state 설정하기.

      const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
        console.log(res.data);

        //setPosts(fakePosts);
        setPosts(res.data); // 배열에서 20개만 잘라서 보기.

        //현재 posts는 아무것도 들어있지 않는 빈 값의 배열 상태.
        //하지만 setPosts를 통해 fakePosts를 넣음으로써 posts에 fakePosts의 정보를 넣는다.
        //setPosts(fakePosts); // = posts에 fakeposts 정보가 들어감.=>const [posts, setPosts] = useState([fakeposts]);

        //현재 posts는 setPosts(fakePosts) 통해 빈 값이 아닌 10개의 원소를 가진 배열 상태이다.
    }


    //처음 컴포넌트가 Mount 된 시점에 2초 기다렸다가 getPosts 함수 실행
    useEffect(() => {

        //2초 기다렸다가 getPosts 함수 실행
        setTimeout(() => {
            getPosts(); // 함수 실행

        }, 2000); //2초

    }, []);

    
    const dataLoaded = posts.map((post) => {
      return <PostItem key = {post.id} post = {post}/>});
    
    

      return (
        <div className="PostList">
          <header>🎁 Post List</header>
          {posts.length > 0 ? dataLoaded : <h2>Loading...</h2>}
        </div>
      );
};

export default PostList;