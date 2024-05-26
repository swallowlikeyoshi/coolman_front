import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div className='post'>
      <h2>{post.id}. {post.title}</h2>
      <p>{post.excerpt}</p>
      <Link to={`/post/${post.id}`}>더 읽어보기</Link>
    </div>
  );
};

export default Post;