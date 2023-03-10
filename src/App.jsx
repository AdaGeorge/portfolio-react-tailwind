import { Route, Routes } from 'react-router-dom'
import Footer from './components/shared/Footer'
import InProgress from './components/shared/InProgress'
import Navbar from './components/shared/Navbar'
import AboutMeScreen from './pages/aboutMe/AboutMeScreen'
import ContactScreen from './pages/ContactScreen'
import HomeScreen from './pages/HomeScreen'


function App() {

  return (
    <div className="App box-border">
      <Navbar/>
      <main className="main">
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/aboutme' element={<AboutMeScreen/>} />
          <Route path='/contact' element={<InProgress/>} />
          <Route path='/projects' element={<InProgress/>} />
          <Route path='/blog' element={<InProgress/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
