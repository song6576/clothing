import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import memory from './util/memory';
import storage from './util/storage';

//刷新页面时：读取local中保存user，保存到内存中
const user = storage.getUser()
console.log("🚀 ~ file: index.tsx:11 ~ user:", user)
memory.user = user

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

reportWebVitals();
