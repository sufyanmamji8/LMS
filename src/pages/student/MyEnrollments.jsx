import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const MyEnrollments = () => {
  const { enrolledCourses } = useContext(AppContext)

  return (
    <div className='md:px-36 px-8 pt-10'>
      <h1 className='text-2xl font-semibold'>My Enrollments</h1>

      <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
        <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
          <tr>
            <th className='px-4 py-3 font-semibold truncate'>Course</th>
            <th className='px-4 py-3 font-semibold truncate'>Duration</th>
            <th className='px-4 py-3 font-semibold truncate'>Completed</th>
            <th className='px-4 py-3 font-semibold truncate'>Status</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses?.length > 0 ? (
            enrolledCourses.map((course, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className='flex items-center gap-4 px-4 py-3'>
                  <img 
                    src={course.courseThumbnail || assets.defaultThumbnail} 
                    alt={course.courseTitle || "Course"} 
                    className='w-14 sm:w-24 md:w-28 rounded'
                  />
                  <div>
                    <p className='font-medium'>{course.courseTitle || "Untitled Course"}</p>
                  </div>
                </td>
                <td className='px-4 py-3'>
                  4 / 10 <span>Lectures</span>
                </td>
                <td className='px-4 py-3'>
                  <button className='px-3 py-1 text-sm bg-blue-500 text-white rounded'>Ongoing</button>
                </td>
                <td className='px-4 py-3'>
                  {/* Example status */}
                  Active
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className='text-center py-6 text-gray-500'>
                No enrollments found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MyEnrollments


