import { Routes, Route } from 'react-router-dom'
import { Container, Box } from '@mui/material'
import Header from './components/Header'
import Home from './pages/Home'
import CountryList from './pages/CountryList'
import CountryDetail from './pages/CountryDetail'
import InteractiveMap from './components/InteractiveMap'
import Quiz from './pages/Quiz'
import NotFound from './pages/NotFound'
import './App.css'
import europeanCountries from './data/europeanCountries'

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountryList />} />
          <Route path="/countries/:id" element={<CountryDetail />} />
          <Route path="/map" element={<InteractiveMap countries={europeanCountries} />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App
