import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

export default function Login(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.login({ email, password });
      localStorage.setItem('crh_token', res.token);
      nav('/');
    } catch (err) {
      alert(err.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" /><br/>
      <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" /><br/>
      <button type="submit">Login</button>
    </form>
  );
}
