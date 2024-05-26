import React from 'react';
import PostList from '../components/PostList';

const Home = () => {
  const posts = [
    { id: 1, title: '"아라리요, 평창"은 정말로 나쁘기만 했었나', excerpt: '여론의 뭇매를 맞았지만 그럼에도 좋은 곡' },
    // { id: 2, title: '', excerpt: 'This is the second post excerpt' },
    // 더 많은 포스트 데이터 추가
  ];

  return (
    <div className='home'>
      <h1>살펴보기</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;