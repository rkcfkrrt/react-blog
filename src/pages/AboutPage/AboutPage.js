import React from "react"
import styled from "styled-components"

const AboutContainer = styled.div`
  width: 50%;
  margin: 30px auto;
  text-align: center;
  min-height: 500px;
`;

const Title = styled.h2`
  margin: 0 auto;
  font-size: 24px;
  width: 70%;
  color: #333;
  text-decoration: none;
`;

const Content = styled.div`
  display: flex;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.6);
  justify-content: center; 
  font-size: 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
`;

export default function AboutPage() {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Content>
        <p>
        一個在考古界打滾數年，滾著滾著不小心誤入網頁領域的廢文製造者。<br/>
        在職參與「<Link href="https://bootcamp.lidemy.com/">Lidemy 程式導師實驗計畫第四期</Link>」，開始過著白天上班、晚上上課寫作業與偶爾爆炸的生活。<br/>
        <br/>
        因為寫廢文太療癒了，常常把<Link href="https://github.com/rkcfkrrt/learningNotes/issues/">學習進度報告</Link>寫成一篇篇廢文，後來發現累積不少篇數，只好整理起來硬要發表出來給大家看。<br/>
        <br/>
        擅長在忙碌中尋找生活的平衡，堅持即使很忙也要盡量找時間下廚給自己和家人吃點好吃的，而休閒時間最喜歡的其中一件事是出門散步兼抓寶。<br/>
        <br/>
        另外，關於這個網站，分享文章列表是由註冊的使用者所發布，而學習心得是轉載我發表在 Github 的<Link href="https://github.com/rkcfkrrt/learningNotes/issues/">網頁開發學習筆記</Link>。
        </p>
      </Content>
    </AboutContainer>
  );
}


