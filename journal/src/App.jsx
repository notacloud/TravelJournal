import './App.css'
import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Card } from '../components/card'
import { tours } from "../data"

const NoContent = () => {
  return (
    <h3 style={{ display: 'flex', flexWrap: 'wrap' }}><strong style={{ color: '#ff9966' }}>The mobile view for this website is currently under development! Sorry for the trouble</strong></h3>
  )
}

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth)
  })

  const cards = tours.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <>
      <Navbar />
      {cards}
    </>
  )
}

export default App
