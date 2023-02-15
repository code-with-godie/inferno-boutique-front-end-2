import React from 'react'
import { useAppContext } from '../../context/AppContext'

const Home = () => {
  const state = useAppContext();
  console.log(state);
  return (
    <div>
      <h1>home page</h1>
    </div>
  )
}

export default Home
