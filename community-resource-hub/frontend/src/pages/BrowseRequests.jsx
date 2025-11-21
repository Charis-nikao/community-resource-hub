import React, {useEffect, useState} from 'react';
import requestService from '../services/requestService';
import { Link } from 'react-router-dom';

export default function BrowseRequests(){
  const [requests,setRequests]=useState([]);
  useEffect(()=>{ load(); },[]);
  const load = async () => {
    try {
      const data = await requestService.getAll();
      setRequests(data);
    } catch (err) { console.error(err); }
  };
  return (
    <div>
      <h2>Open Requests</h2>
      {requests.length === 0 && <p>No requests yet</p>}
      <ul>
        {requests.map(r => (
          <li key={r._id}>
            <h3><Link to={`/requests/${r._id}`}>{r.title}</Link> — {r.status}</h3>
            <p>{r.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
