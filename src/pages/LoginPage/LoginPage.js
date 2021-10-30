import React, { useState, useContext } from "react";
import styled from "styled-components";
import { login, getMe } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts";


const LoginContainer = styled.form`
  width: 30%;
  margin: 30px auto;
  min-height: 500px;
`;

const Username = styled.div``;

const Password = styled.div`
  margin: 20px 0 30px;
`;

const Button = styled.button``;

const ErrorMessage = styled.h3`
  color: red;
`;

export default function LoginPage() {
  const { setUser } = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const history = useHistory()
  
  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password).then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message)
      }
      setAuthToken(data.token)
      getMe().then((response) => {
        if (response.ok !== 1) {
          setAuthToken(null)
          return setErrorMessage(response.toString())
        }
        setUser(response.data)
        alert("登入成功")
        history.goBack()
      })
    })
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
    setErrorMessage("")
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    setErrorMessage("")
  }

  return (
    <LoginContainer onSubmit={handleLogin}>      
      <Username>
        帳號 Username：<input type="text" value={username} onChange={handleUsername}/>
      </Username>
      <Password>
        密碼 Password：<input type="password" value={password} onChange={handlePassword}/>
      </Password>
      <Button type="submit">送出</Button>      
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}           
    </LoginContainer>
  );
}


