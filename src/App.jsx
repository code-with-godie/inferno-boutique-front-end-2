import React from 'react'
import { RouterProvider } from 'react-router-dom';
import AppContextProvider from './context/AppContext';
import router from './routes/router';
const App = () => {
  return (
    <AppContextProvider>
      <RouterProvider router={router}/>
    </AppContextProvider>
  )
}

export default App
