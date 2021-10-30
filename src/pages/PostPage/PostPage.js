import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom";

import { getPost, getNickname } from '../../WebAPI'

const PostContainer = styled.div`
  width: 60%;
  min-height: 500px;
  margin: 20px auto 30px;
  align-items: center;
`;

const PostTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
`;

const PostData = styled.div`
  text-align: right;
  margin: 10px 0;
`;

const PostContent = styled.div`
  font-size: 20px;
  line-height: 35px;
`;

export default function Post() {
  const [post, setPost] = useState(null)
  const [nickname, setNickname] = useState()

  let { id } = useParams();

  useEffect(() => {
    getPost(id).then(post => {
      setPost(post[0])
      getNickname(post[0].userId)
        .then(data => setNickname(data[0].nickname))
    });

  }, [id]
  )


  return (
    <PostContainer>
      <PostTitle>{post && post.title}</PostTitle>
      <PostData>發表人：{nickname}</PostData>
      {post && <PostData>發表時間：{new Date(post.createdAt).toLocaleString()}</PostData>}
      <PostContent>{post && post.body}</PostContent>
    </PostContainer>
  );
}


