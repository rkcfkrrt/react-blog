# React 實作：部落格

以 React Hook 與 api 操作為主的部落格練習。

[Demo](https://rkcfkrrt.github.io/react-blog/)

![首頁截圖](https://images.plurk.com/4QvsBCXcqMcrEJa7zuSEAA.png)

## 部落格功能

- 註冊機制：使用者可經註冊後發表分享文章。
- 登入機制：使用者註冊後可登入/登出。
- 發表分享文章：新增、編輯（標題、內文）。
- 首頁：可見最新五篇分享文章。
- 「關於」頁面：一些簡介。
- 分享文章列表：顯示所有分享文章。
- 學習心得列表：顯示所有學習心得。
- 「學習心得」頁面：轉載我發表在 Github 的網頁開發學習筆記，點擊「前往 Github」按鈕可前往該心得原網址。
- read more 功能：點擊首頁各篇文章、分享文章列表與學習心得列表之文章標題，可進入該文章全文頁面。
- 分頁機制：於分享文章列表與學習心得列表點擊頁面下方按鈕可進入前/後一頁以顯示前/後五篇文章，並可進入首頁與尾頁。

##### 學習心得列表截圖
![學習心得列表截圖](https://images.plurk.com/KQ0sAyNfBbf6Y7pjSgWrI.png)

##### 「學習心得」頁面截圖
![「學習心得」頁面](https://images.plurk.com/1ojD4gNCVTTQ4yMBPCV16o.png)

## 使用技術

- 主要為 React Hook 
- JavaScript / ES6
- 採用 JSX 語法撰寫元件
- 使用 styled-component 排版
- 使用 ReactMarkdown 讓網頁支援渲染 Markdown

## 專案結構

    |-- src
        |-- contexts.js
        |-- index.js
        |-- reportWebVitals.js
        |-- setupTests.js
        |-- utils.js
        |-- WebAPI.js
        |-- components
        |   |-- App
        |   |   |-- App.css
        |   |   |-- App.js
        |   |   |-- App.test.js
        |   |   |-- index.css
        |   |-- Footer
        |   |   |-- Footer.js
        |   |   |-- index.js
        |   |-- Header
        |       |-- Header.js
        |       |-- index.js
        |-- pages
            |-- AboutPage
            |   |-- AboutPage.js
            |   |-- index.js
            |-- HomePage
            |   |-- HomePage.js
            |   |-- index.js
            |-- IssuePage
            |   |-- index.js
            |   |-- IssuePage.js
            |-- LearningnotesList
            |   |-- index.js
            |   |-- LearningnotesList.js
            |-- LoginPage
            |   |-- index.js
            |   |-- LoginPage.js
            |-- NewPostPage
            |   |-- index.js
            |   |-- NewPostPage.js
            |-- PostListPage
            |   |-- index.js
            |   |-- PostListPage.js
            |-- PostPage
            |   |-- index.js
            |   |-- PostPage.js
            |-- RegisterPage
                |-- index.js
                |-- RegisterPage.js

