import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
function Home() {
    const navigate = useNavigate();
  return (
    <div className='container'>
        <h1>What Do You Want?</h1>
        <button className='btn' type="submit" onClick={() => navigate('add')}> Add A Question </button>
        <button className='btn' type="submit" onClick={() => navigate('test')}> Test YourSelf </button>
    </div>
  )
}

export default Home;