import memory from "../../util/memory";
import { useNavigate } from "react-router-dom";
import './index.sass';
import { useEffect } from "react";

const Admin = () => {
  const user:any  = memory.user;
  const navigate = useNavigate();
  // 路由重定向到登陆页面
  useEffect(() => {
    if(!user.username) return navigate('/login');
  },[])
  return (
    <div>Admin</div>
  )
}

export default Admin;
