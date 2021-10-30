import React, { useState, useEffect } from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { getLimitPosts } from '../../WebAPI'

const limit = 3;

const Root = styled.div`
  margin: 0 auto;
  background-color: ;
  justify-content: center;
`;

const Title = styled.div`
  padding: 30px 0;
  width: 100%;
  margin: 0 auto;
  font-size: 28px;
  text-align: center;
`;

const FeaturedImages = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  font-size: 28px;
  text-align: center;
  background-image: url("https://images.plurk.com/2UUrysp3EMpiOr3X8PLEBm.jpg");
  background-size: cover;
  height: 500px;
  opacity: .8;
  z-index: -1;
`;

const Main = styled.div`
  display: flex;
  margin: 0 auto;
  width: 60%;
`;

const PostsContainer = styled.div`
  width: 100%;
`;

const PostContainer = styled(Link)`  
  display: flex;
  border: 1px solid rgba(0, 12, 34, 0.2);
  padding: 20px 5px;
  justify-content: space-between;
  align-items: flex-end;
  text-decoration: none;
`;

const PostTop = styled.div`
  width: 35%;
  margin-left: 10px;
`;

const PostsTitle = styled.div`
  margin: 0 20px;
  font-size: 24px;
  width: 70%;
  color: #333;
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostsDate = styled.div`
  display: flex;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.6);
  text-align: left;  
`;

const PostsBody = styled.div`
  display: flex;
  width: 60%;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.6);
  text-align: left;
  display:-webkit-box;
  overflow:hidden;
  text-overflow:ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  max-height: 3;
`;

function Posts({ post }) {
  return (
    <PostContainer to={`/posts/${post.id}`}>
      <PostTop>
        <PostsTitle >{post.title}</PostsTitle>
        <PostsDate>{new Date(post.createdAt).toLocaleString()}</PostsDate>
      </PostTop>
      <PostsBody>{post.body}</PostsBody>
    </PostContainer>
  )
}

Posts.propTypes = {
  post: PropTypes.object,
}

export default function HomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getLimitPosts(limit, 1)
    .then(res => {
      if (res.headers.get("X-Total-Count")) {
        return res.json()
      }
    })
    .then(posts => {
      setPosts(posts)
    })
  }, [])

  return (
    <Root>
      <FeaturedImages/>
      <Title>最新分享</Title>
      <Main>
        <PostsContainer>
          {posts.map(post => (
            <Posts post={post} key={post.id} />
          ))}
        </PostsContainer>
      </Main>
    </Root>
  );
}


