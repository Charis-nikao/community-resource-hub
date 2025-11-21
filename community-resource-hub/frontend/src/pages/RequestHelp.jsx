import React, {useState} from 'react';
import requestService from '../services/requestService';
import { useNavigate } from 'react-router-dom';

export default function RequestHelp(){
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await requestService.create({ title, description });
      nav('/requests');
    } catch (err) {
      alert(err.message || 'Error');
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Request Help</h2>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" /><br/>
      <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description" /><br/>
      <button type="submit">Create Request</button>
    </form>
  );
}
