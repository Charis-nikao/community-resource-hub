import React, {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';
import io from 'socket.io-client';

let socket;
export default function RequestDetails(){
  const { id } = useParams();
  const [request, setRequest] = useState(null);
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(()=> {
    const load = async () => {
      const { data } = await API.get(`/requests/${id}`);
      setRequest(data);
    };
    load();
  }, [id]);

  useEffect(()=> {
    socket = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000');
    socket.emit('joinRoom', { requestId: id });
    socket.on('message', (msg) => {
      setMessages(m => [...m, msg]);
    });
    return () => socket.disconnect();
  }, [id]);

  const sendMessage = () => {
    if (!user) return alert('Login first');
    socket.emit('sendMessage', { requestId: id, senderId: user._id, message: text });
    setText('');
  };

  const match = async () => {
    try {
      await API.patch(`/requests/${id}/fulfill`);
      const { data } = await API.get(`/requests/${id}`);
      setRequest(data);
      alert('Matched to request');
    } catch (err) { alert('Error matching'); }
  };

  if (!request) return <p>Loading...</p>;
  return (
    <div>
      <h2>{request.title}</h2>
      <p>{request.description}</p>
      <p>Status: {request.status}</p>
      {request.status !== 'matched' && <button onClick={match}>Volunteer to help / Match</button>}
      <hr />
      <h3>Chat</h3>
      <div style={{minHeight:100, border:'1px solid #ddd', padding:8}}>
        {messages.map(m => <div key={m._id}><b>{m.sender}</b>: {m.message}</div>)}
      </div>
      <input value={text} onChange={e=>setText(e.target.value)} placeholder="Message" />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
