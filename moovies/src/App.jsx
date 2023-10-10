import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import ReadMore from './pages/ReadMore'

function App() {
 const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/readmore/:id' element={<ReadMore/>}/>
      </Route>
     )
  )
  return (
   <>
   <RouterProvider router={routes}/>
   </>
  )
}

export default App