import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { AppContext } from '../../context/AppContext';

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-500'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3 my-6'>
        Discover our top rated courses across various categories.<br></br> From coding and design to business and wellness, our courses are crafted to deliver results.
      </p>

      <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
        {allCourses.length > 0 ? (
          allCourses.slice(0, 4).map((course, index) => (
            <CourseCard key={index} course={course} />
          ))
        ) : (
          <p className="text-gray-400">Loading courses...</p>
        )}
      </div>

      <Link
        to={'/course-list/'}
        onClick={() => scrollTo(0, 0)}
        className="border border-gray-500/30 text-gray-500 px-10 py-3 rounded hover:bg-blue-500 hover:text-white transition-all duration-5000 ease-in-out"


      >
        Show all courses
      </Link>
    </div>
  );
};

export default CourseSection;

