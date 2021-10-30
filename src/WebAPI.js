import { getAuthToken, } from "./utils"

const BASE_URL = "https://student-json-api.lidemy.me";
const BASE_GITHUB_URL = "https://api.github.com/repos/rkcfkrrt/learningNotes/issues";

const token = getAuthToken();

export const getLimitPosts = (limit, currentPage) => {
  return fetch(
    `${BASE_URL}/posts?_limit=${limit}&_page=${currentPage}&_sort=createdAt&_order=desc`
  ).then(res => res)
  .catch(err => console.log('error:', err));
}

export const getPost = (id) => {
  return fetch(`${BASE_URL}/posts?id=${id}`)
    .then(res => res.json())
    .catch(err => console.log('error:', err))
}

export const getIssues = (per_page, currentPage) => {
  return fetch(
    `${BASE_GITHUB_URL}?creator=rkcfkrrt&per_page=${per_page}&page=${currentPage}`
  ).then(res => res)
  .catch(err => console.log('error:', err));
}

export const getIssue = (issue_number) => {
  return fetch(`${BASE_GITHUB_URL}/${issue_number}`)
    .then(res => res.json())
    .catch(err => console.log('error:', err))
}

export const getIssueTotalCount = () => {
  return fetch('https://api.github.com/search/issues?q=repo:rkcfkrrt/learningNotes+type:issue+state:open&per_page=1')
    .then(res => res.json())
    .catch(err => console.log('error:', err))
}

export const getNickname = (userId) => {
  return fetch(`${BASE_URL}/users?id=${userId}`)
    .then(res => res.json())
    .catch(err => console.log('error:', err))
}

export const login = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
    .then(res => res.json())
}

export const getMe = () => {
  return fetch(`${BASE_URL}/me`, {
    headers: {
      'authorization': `Bearer ${token}`,
    }
  })
    .then(res => res.json())
}

export const newPost = (title, content) => {
  return fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      title,
      body: content,
    })
  })
    .then(res => res.json())
}

export const register = (nickname, username, password) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      nickname,
      username,
      password
    })
  })
    .then(res => res.json())
}
