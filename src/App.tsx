import { useState } from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Buttons from './components/Buttons'
import Footer from './components/Footer'
import './App.css'

function App() {

  const [autoRotate, setAutoRotate] = useState(true)

  return (
    <div className="App">
      <Header />
      <Carousel autoRotate={autoRotate}/>
      <Buttons autoRotate={autoRotate} setAutoRotate={setAutoRotate}/>
      <Footer />
    </div>
  )
}

export default App
