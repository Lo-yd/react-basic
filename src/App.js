import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Layout />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
