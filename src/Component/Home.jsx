import React from 'react'
import Login from './Login';

const Home = () => {
  return (
    <div className='d-flex justify-content-center'>
         <div className='w-75'>
        <h1 className='text-center'>Welcome to the Login Page</h1>
       
        <Login/>
        </div>
        
    </div>
  )
}

export default Home;