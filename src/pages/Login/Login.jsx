import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import adminPassword from "@utils/password.js";

const Login = () => {
  const navigate = useNavigate();
  
  useEffect ( () => {
    // ayuda a redirijir al usuario si ya esta registrado
    const login = window.localStorage.getItem('login');
    if (login === 'true') {
      navigate('/admin');
    }
  }, [])

  const [password, setPassword] = useState('');
  
  const hanldeCheckPassword = (e) => {
    if (adminPassword === e.target.value){
      window.localStorage.setItem('login', 'true');
      navigate('/admin');
    }
    setPassword(e.target.value);
  }
  
  return (
    <div>
      <p>Ingresa la contraseña para administrar</p>
      <input value={password} type='password' onChange={hanldeCheckPassword}/>
    </div>
  )
}

export default Login;