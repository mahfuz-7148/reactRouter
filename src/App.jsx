import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from './components/Home/Home'
import Blogs from './components/Blogs/Blogs'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Rootnav from "./rootlayout/Rootnav"



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootnav /> }>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs /> } />
        <Route path="about" element={<About /> } />
        <Route path="contact" element={<Contact /> } />
      </Route>
    )
  )

  return (
   <RouterProvider router={router} />

  )
}

export default App