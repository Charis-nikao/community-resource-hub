import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

export default function Register(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.register({ name, email, password });
      localStorage.setItem('crh_token', res.token);
      nav('/');
    } catch (err) {
      alert(err.message || 'Register failed');
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" /><br/>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" /><br/>
      <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" /><br/>
      <button type="submit">Register</button>
    </form>
  );
}
