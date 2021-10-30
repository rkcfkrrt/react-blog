import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

import { getIssue } from '../../WebAPI'

const PostContainer = styled.div`
  width: 60%;
  min-height: 500px;
  margin: 20px auto 50px;
  align-items: center;
`;

const PostTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
`;

const PostInfo = styled.div`
  text-align: right;
`;

const PostDate = styled.div`
  margin: 15px 0 30px;
`;

const PostLink  = styled.a`
  width: 100px;
  height: 2rem;
  background-color: white;
  margin: 5px 0;
  padding: 10px 20px;
  border: 1px solid grey;
  cursor: pointer;
  font-size: 15px;
  text-decoration: none;
  color: black;
`;

const PostContent = styled.div`
  font-size: 20px;
  line-height: 35px;
`;

export default function IssuePage() {
  const [issue, setIssue] = useState(null)
  let { issue_number } = useParams();

  useEffect(() => {    
    getIssue(issue_number).then(issue => {
      setIssue(issue)
    });

  }, [issue_number]
  )

  return (
    
    <PostContainer>
      {issue && <div>
      <PostTitle>{issue.title}</PostTitle>
      <PostInfo>
        <PostDate>{new Date(issue.created_at).toLocaleString()}</PostDate>
        <PostLink href={issue.html_url}>前往 Github</PostLink>
      </PostInfo>
      <PostContent>
        <ReactMarkdown children={issue.body} />
      </PostContent>
      </div> }
    </PostContainer>
  );
}

