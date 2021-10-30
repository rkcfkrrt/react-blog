import React, { useState, useContext } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../contexts"

import { newPost } from '../../WebAPI'

const NewPostContainer = styled.form`
  width: 70%;
  margin: 20px auto;
  min-height: 500px;
`;

const NewPostTitle = styled.input`
  width: 100%;
  margin: 10px auto 20px;
  font-size: 20px;  
`;

const NewPostContent = styled.textarea`
  width: 100%;
  margin: 10px auto 20px;
  font-size: 20px;
  line-height: 35px;
`;

const NewPostItem = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const NewPostButton = styled.button`
  font-size: 16px;
  background-color: #e7e7e7;
  padding: 10px 28px;
  border: none;
`;

const ErrorMessage = styled.h2`
  color: red;
`;

export default function NewPostPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const { user } = useContext(AuthContext)
  const history = useHistory();

  if (!user) {
    //導回首頁
    history.push("/")
  }

  const handleNewPost = (e) => {
    e.preventDefault()

    newPost(title, content).then(data => {
      //發布失敗
      if (data.ok === 0) {
        return setErrorMessage(data.message)
      }
      //發布成功後導回首頁
      setTitle("")
      setContent("")
      history.push("/")
    })
  }

  const handleNewTitle = (e) => {
    setTitle(e.target.value)
    setErrorMessage("")
  }

  const handleNewContent = (e) => {
    setContent(e.target.value)
    setErrorMessage("")
  }

  return (
    <NewPostContainer className="container" onSubmit={handleNewPost}>
      <NewPostItem>文章標題</NewPostItem>
      <NewPostTitle type="text" value={title} onChange={handleNewTitle} />
      <NewPostItem>文章內容</NewPostItem>
      <NewPostContent rows="10" value={content} onChange={handleNewContent} />
      <NewPostButton>發布</NewPostButton>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </NewPostContainer>
  );

}


