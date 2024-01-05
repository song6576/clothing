import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Admin from './pages/admin';
import Home from './pages/Home';
import User from './pages/User';

const App = () => {
    return (
        <BrowserRouter>
            <Routes> {/*只匹配其中一个*/}
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Admin />} />
                <Route path='/home' element={<Home />} />
                <Route path='/user' element={<User />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
