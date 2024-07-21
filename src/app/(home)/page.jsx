'use client'

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List/List';
import { CircularProgress } from '@mui/material';
import "./page.css"




const BootstrapJS = dynamic(
  () => import('bootstrap/dist/js/bootstrap.bundle.min'),
  { ssr: false }
);




export default function Home() {

  useEffect(() => {
    BootstrapJS();
  }, []);

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
  fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users') 
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setData(data);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
}, []);

if (loading) return <div className='load'>
  <CircularProgress/>
</div>;
if (error) return <div>Error: {error.message}</div>;

  return (
    <>
    <div className="users">
      <div className="container">

        <div className="heading">
        <h3>Banao Task 2 &copy; Aryan Srivastava</h3>
        </div>

        <div className="list">
        {data.map(user => (
              <List 
                key={user.id}
                avatar={user.avatar}
                firstName={user.profile.firstName}
                lastName={user.profile.lastName}
                jobTitle={user.jobTitle}
                username={user.profile.username}
                bio={user.Bio}
                email={user.profile.email}
              />
            ))}
          
        </div>

  </div>
    </div>
    </>
  );
}


