import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'
import Users from './Components/Users/Users.jsx'
import Project from './Components/Project/Project.jsx'


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home/>}/>
      <Route path='project' element={<Project/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
      <Route path='users/:userid' element={<Users/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
