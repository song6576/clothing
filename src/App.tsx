import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router';
import Login from './pages/login';
import Admin from './pages/admin';

function App() {
  return (
    <BrowserRouter>
      <Routes> {/*只匹配其中一个*/}
        <Route path='/login' Component={Login}></Route>
        <Route path='/' Component={Admin}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
