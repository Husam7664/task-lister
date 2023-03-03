import './App.css'
import NavBar from './components/NavBar'
import AllTasks from './components/AllTasks'
import AddTask from './components/AddTask'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<AllTasks />} />
        <Route path='/add-task' element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
