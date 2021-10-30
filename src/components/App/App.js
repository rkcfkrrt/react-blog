import './App.css';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { HashRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import { getMe } from "../../WebAPI";
import { getAuthToken } from "../../utils";
import { AuthContext } from "../../contexts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import PostPage from "../../pages/PostPage";
import NewPostPage from "../../pages/NewPostPage";
import RegisterPage from "../../pages/RegisterPage";
import AboutPage from "../../pages/AboutPage";
import PostListPage from "../../pages/PostListPage";
import LearningnotesList from "../../pages/LearningnotesList"
import IssuePage from "../../pages/IssuePage"


const Root = styled.div`
  padding-top: 64px;
  margin: 0px;
  height: 100%;
`;

function App() {
  const [user, setUser] = useState();

  useEffect(() => {    
    if(getAuthToken()) {
      getMe().then((response) => {
        if(response.ok) {
          setUser(response.data)
        }
      })
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}> 
    <Root>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/posts/:id" component={PostPage} />
          <Route exact path="/new-post" component={NewPostPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/post-list" component={PostListPage} />
          <Route exact path="/learningnotes-list" component={LearningnotesList} />
          <Route exact path="/learningnotes/:issue_number" component={IssuePage} />
        </Switch>
      </Router>
      <Footer />
    </Root>
    </AuthContext.Provider> 
  );
}

export default App;
