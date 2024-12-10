import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from './components/Home/Home'
import Blogs from './components/Blogs/Blogs'
import About from './components/About/About'
import Rootnav from "./rootlayout/Rootnav"
import Contactlayput from "./rootlayout/Contactlayput"
import Contactinfo from "./components/Contactinfo"
import ContactForm from "./components/ContactForm"
import Errorpage from "./components/Errorpage"
import JobsLayout from "./rootlayout/JobsLayout"
import Jobs, { jobsLoader } from "./components/Jobs"
import JobDetails, { jobDetailsLoader } from "./components/JobDetails"



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootnav /> }>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs /> } />
        <Route path="about" element={<About /> } />
        <Route path="contact" element={<Contactlayput />}>
         <Route path="info" element={<Contactinfo /> } />
         <Route path="form" element={<ContactForm /> } /> 
        </Route>
        <Route path="jobs" element={<JobsLayout /> }>
         <Route index element={<Jobs/>} loader={jobsLoader} />
         <Route path=":id" element={<JobDetails /> } loader={jobDetailsLoader} />
        </Route>
        <Route path="*" element={<Errorpage /> } />
      </Route>
    )
  )

  return (
   <RouterProvider router={router} />

  )
}

export default App