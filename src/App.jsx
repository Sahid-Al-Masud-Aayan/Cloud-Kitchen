import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home'

function App() {

  const mainPaths = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
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
