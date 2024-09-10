import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home'
import Login from './Pages/Login'

function App() {

  const mainPaths = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={mainPaths}/>
    </>
  )
}

export default App
