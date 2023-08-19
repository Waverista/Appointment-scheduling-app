import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<Login />}></Route>
      <Route path = '/Register' element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
