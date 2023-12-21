import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import memory from './util/memory';
import storage from './util/storage';
import { createRoot } from 'react-dom/client';

//刷新页面时：读取local中保存user，保存到内存中
const user = storage.getUser()
console.log("🚀 ~ file: index.tsx:11 ~ user:", user)
memory.user = user

const rootElement:any = document.getElementById('root');
createRoot(rootElement)?.render(<App/>);

reportWebVitals();
