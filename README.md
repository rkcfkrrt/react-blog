# React 實作：部落格

以 React Hook 與 api 操作為主的部落格練習。

[Demo]()

![使用截圖]()

## 部落格功能

- 註冊機制：使用者可經註冊後發表分享文章
- 登入機制：使用者註冊後可登入/登出
- 發表分享文章：新增、編輯（標題、內文）
- 首頁：可見最新五篇分享文章
- 「關於」頁面：簡介
- 分享文章列表：顯示所有分享文章
- 學習心得列表：顯示所有學習心得
- read more 功能：點擊首頁各篇文章、分享文章列表與學習心得列表之文章標題，可進入該文章全文頁面。
- 分頁機制：於分享文章列表與學習心得列表點擊頁面下方按鈕可進入前/後一頁以顯示前/後五篇文章，並可進入首頁與尾頁。


## 使用技術

- 主要為 React Hook 
- JavaScript / ES6
- 採用 JSX 語法撰寫元件
- 使用 styled-component
- 

## 專案結構

├── src                     
    ├── contexts.js
    ├── index.js               
    ├── utils.js       
    ├── reportWebVitals.js             
    ├── setupTests.js
    ├── utils.js
    ├── WebAPI.js
    ├── components 
    │    ├── App
    │    │   ├── App.css
    │    │   ├── App.js
    │    │   ├── App.test.js
    │    │   └── index.css
    │    ├── Footer
    │    │   ├── Footer.js
    │    │   └── index.js
    │    └── Header
    │        ├── Header.js
    │        └── index.js
    └── pages
         ├── AboutPage
         │   ├── AboutPage.js
         │   └── index.js
         ├── HomePage
         │   ├── HomePage.js
         │   └── index.js
         ├── IssuePage
         │   ├── IssuePage.js
         │   └── index.js
         ├── LearningnotesList
         │   ├── LearningnotesList.js
         │   └── index.js
         ├── LoginPage
         │   ├── LoginPage.js
         │   └── index.js
         ├── NewPostPage
         │   ├── NewPostPage.js
         │   └── index.js
         ├── PostListPage
         │   ├── PostListPage.js
         │   └── index.js
         ├── PostPage
         │   ├── PostPage.js
         │   └── index.js
         └── RegisterPage
             ├── RegisterPage.js
             └── index.js
