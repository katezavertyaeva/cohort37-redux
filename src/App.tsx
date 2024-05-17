import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Lessons
// import Lesson16 from "./lessons/Lesson16/Lesson16"
import Lesson19 from 'lessons/Lesson19/Lesson19'


//Homeworks
// import Homework16 from "homeworks/Homework16/Homework16"
// import Homework17 from "homeworks/Homework17/Homework17"

//Consultations
import Consultation7 from 'consultations/Consultation7/Consultation7'


import Layout from "pages/UsersApp/Layout/Layout"
import Home from "pages/UsersApp/Home/Home"
import Users from "pages/UsersApp/Users/Users"

function App() {
  return (
    <BrowserRouter>
      {/* <Lesson16 /> */}
      {/* <Homework16 /> */}
      {/* <Homework17 /> */}
      {/* Lesson18(Homework18) - Layout и его вложенные рауты */}
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout> */}
      {/* <Consultation7 /> */}
      <Lesson19/>
    </BrowserRouter>
  )
}

export default App

