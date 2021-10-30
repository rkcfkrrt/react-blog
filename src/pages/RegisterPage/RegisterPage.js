import React, { useState, useContext } from "react";
import styled from "styled-components";
import { register, getMe } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts";

const RegisterContainer = styled.form`
  width: 50%;
  margin: 30px auto;
  min-height: 500px;

  & input {
    margin-top: 5px;
  }
`;

const RegisterTitle = styled.h2``;

const Username = styled.div``;

const Password = styled.div`
  margin: 20px 0;
`;

const Nickname = styled(Username)``;

const Button = styled.button`
  margin-top: 30px;
`;
const ErrorMessage = styled.h3`
  color: red;
`;

export default function RegisterPage() {
  const { setUser } = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [nickname, setNickname] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const history = useHistory()
  const password = "Lidemy"
  
  const handleRegister = (e) => {
    e.preventDefault();
    
    register(nickname, username, password)    
    .then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message)
      }
      setAuthToken(data.token)
      getMe().then((data) => {
        if (data.ok === 0) {
          return setErrorMessage(data.message)
        }
        setUser(data.data)
        alert("註冊成功")
        history.push("/")
      })
    })
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
    setErrorMessage("")
  }

  const handleNickname = (e) => {
    setNickname(e.target.value)
    setErrorMessage("")
  }

  const handlePassword = () => {
    setErrorMessage("")
  }

  return (
    <RegisterContainer onSubmit={handleRegister}>
      <RegisterTitle>請輸入註冊資料</RegisterTitle>
      <Username>
        <div>帳號 Username</div> <input type="text" name="username"  value={username} onChange={handleUsername}/>
      </Username>
      <Password>
        <div>密碼 Password</div> <input type="password" name="password" value={password} onChange={handlePassword}/>
        <span> 因資安考量，密碼皆預設為 Lidemy</span>
      </Password>
      <Nickname>
        <div>暱稱 Nickname</div><input type="text" name="nickname" value={nickname} onChange={handleNickname}/>
      </Nickname>
      <Button type="submit">送出</Button>      
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}           
    </RegisterContainer>
  );
}


