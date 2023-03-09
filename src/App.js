import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import './app.css'
import Footer from './component/footer'
import Navbar from './component/navbar'
import ExerciseDetail from './pages/exercisedetail'
import Home from './pages/home'


const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
