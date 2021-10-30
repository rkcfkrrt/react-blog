import React, { useContext } from "react";
import styled from "styled-components";
// eslint-disable-next-line
import { HashRouter as Route, Link, useLocation, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { setAuthToken } from "../../utils"

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  padding: 0 32px;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  background-color: white;
`;

const Brand = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const NavList = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
  height: 64px;
`;


const LeftNav = styled.div`
  display: flex;
  align-items: center;

  ${NavList} {
    margin-left: 16px;
  }
`;
const Nav = styled(Link)`
  display: flex;
  height: 100%;
  width: 100px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding: 5px 3px;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
  text-align:center;

  ${(props) =>
    props.$active &&
    `
  background: rgba(0, 0, 0, 0.1);
  ` }
`;

const RightNav = styled.div`
  height: 64px;
  display: flex;
  ${NavList} {
    margin-left: 16px;
  }
`;

const Login = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: black;
  height: 100%;
  display: flex;
  height: 100%;
  width: 100px;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$active &&
    `
    background: rgba(0, 0, 0, 0.1);
    ` }
`;

const Register = styled(Login)``;

const Logout = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;
  height: 100%;
  display: flex;
  height: 100%;
  width: 100px;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$active &&
    `
    background: rgba(0, 0, 0, 0.1);
  ` }
`;

export default function Header() {
  const location = useLocation();
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    setAuthToken("")
    setUser(null)
    alert("登出成功")
    if (location.pathname !== "/") {
      history.push("/")
    }
  }

  return (
    <HeaderContainer>
      <LeftNav>
        <Brand>BLOG</Brand>
        <NavList>
          <Nav to="/" $active={location.pathname === '/'}>首頁</Nav>
          <Nav to="/about" $active={location.pathname === '/about'}>關於</Nav>
          <Nav to="/post-list" $active={location.pathname === '/post-list'}>分享文章列表</Nav>
          <Nav to="/learningnotes-list" $active={location.pathname === '/learningnotes-list'}>學習心得列表</Nav>
          {user && <Nav to="/new-post" $active={location.pathname === '/new-post'}>發布文章</Nav>}
        </NavList>
      </LeftNav>
      <RightNav>
        {!user &&
          <>
            <Login to="/login" $active={location.pathname === '/login'}>登入</Login>
            <Register to="/register" $active={location.pathname === '/register'}>註冊</Register>
          </>
        }
        {user && <Logout onClick={handleLogout}>登出</Logout>}
      </RightNav>
    </HeaderContainer>
  );
}


