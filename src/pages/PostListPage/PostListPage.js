import React, { useState, useEffect } from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { getLimitPosts, getNickname } from '../../WebAPI'

const Root = styled.div`
  width: 80%;
  min-height: 550px;
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

const PostsContainer = styled.div`
  margin: 0 auto;
  width: 70%;

  justify-content: center;
`;

const PostContainer = styled.div`  
  display: flex;
  border: 1px solid rgba(0, 12, 34, 0.2);
  padding: 20px 5px;
  justify-content: space-between;
  align-items: flex-end;
`;

const PostsTitle = styled(Link)`
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

const PostsUserId = styled.div`
  display: flex;
  margin: 0 20px;
  color: rgba(0, 0, 0, 0.6);
  text-align: left;  
`;

const PostsDate = styled.div`
  display: flex;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.6);
  text-align: left;  
`;

const Pages = styled.div`
  width: 70%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background-color: grey;
  padding: 5px 0;
`;

const PageButton = styled.button`
  width: 60px;
  height: 2rem;
  background-color: white;
  margin: 0 5px;
  border: 1px solid grey;
  cursor: pointer;
  font-size: 15px;
`;

const CurrentPage = styled.span`
  margin: 0 5px;
`;

const limit = 5

function Posts({ post }) {
  const [nickname, setNickname] = useState("")
  getNickname(post.userId)
    .then(data => setNickname(data[0].nickname))
  return (
    <PostContainer>
      <PostsTitle to={`/posts/${post.id}`}>{post.title}</PostsTitle>
      <PostsUserId>{nickname}</PostsUserId>
      <PostsDate>{new Date(post.createdAt).toLocaleString()}</PostsDate>
    </PostContainer>
  )
}

Posts.propTypes = {
  post: PropTypes.object,
}

export default function PostListPage() {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const handleFirstPage = () => {
    setCurrentPage(1)
  }
  const handleLastPage = () => {
    setCurrentPage(totalPages)
  }
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    getLimitPosts(limit, currentPage)
      .then(res => {
        if (res.headers.get("X-Total-Count")) {
          const total = Number(res.headers.get("X-Total-Count"))
          setTotalPages(Math.ceil(total / limit))
          return res.json()
        }
      })
      .then(posts => {
        setPosts(posts)
      })
  }, [totalPages, currentPage])

  return (
    <Root>
      <Title>分享文章列表</Title>
      <PostsContainer>
        {posts.map(post => (
          <Posts post={post} key={post.id} />
        ))}
      </PostsContainer>
      <Pages>
        <div>
          {currentPage !== 1 &&
            <>
              <PageButton onClick={handleFirstPage}>第一頁</PageButton>
              <PageButton onClick={handlePreviousPage}>＜</PageButton>
            </>
          }
          <CurrentPage>第 {currentPage}／{totalPages} 頁</CurrentPage>
          {currentPage !== totalPages &&
            <>
              <PageButton onClick={handleNextPage}>＞</PageButton>
              <PageButton onClick={handleLastPage}>最末頁</PageButton>
            </>
          }
        </div>
      </Pages>
    </Root>
  );
}


