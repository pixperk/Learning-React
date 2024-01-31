import react from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import { Box } from '@mui/material'

function App() {
  
  return (
    <Box width="400">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
    </Box>
  )
}

export default App
