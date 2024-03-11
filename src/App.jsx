import React, { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './Contexts/Theme'

function App() {
  const [themeMode, setThemeMode] = useState("dark")

  const lightMode = () =>{
    setThemeMode("light")
  }
  const darkMode = () =>{
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
   

  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
    <Header/>
      <Outlet/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
