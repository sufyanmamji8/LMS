import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/student/Home";
import CourseList from "./pages/student/CourseList";
import CourseDetail from "./pages/student/CourseDetail";
import MyEnrollments from "./pages/student/MyEnrollments";
import Player from "./pages/student/Player";
import Loading from "./components/student/Loading";
import Educator from "./pages/educator/Educator";
import DashBoard from "./pages/educator/DashBoard";
import AddCourses from "./pages/educator/AddCourses";
import MyCourses from "./pages/educator/MyCourses";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";
import Navbar from "./components/student/Navbar";

export default function App() {
  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && <Navbar />}

      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course-list" element={<CourseList />} />
      <Route path="course-list/:input" element={<CourseList />} />
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/my-enrollments" element={<MyEnrollments />} />
      <Route path="/player/:courseId" element={<Player />} />
      <Route path="/loading/:path" element={<Loading />} />

     <Route path="/educator" element={<Educator />}>
        <Route path="/educator" element={<DashBoard />} /> 
        <Route path="add-course" element={<AddCourses />} /> 
        <Route path="my-courses" element={<MyCourses />} /> 
        <Route path="students-enrolled" element={<StudentsEnrolled />} /> 
      </Route>

    </Routes>
    </div>
  
  )
}
