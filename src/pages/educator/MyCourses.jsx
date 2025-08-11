import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const MyCourses = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              The courses I offer
            </h1>
          </div>
        </div>

        {/* Loop through allCourses */}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {allCourses?.map((course, index) => (
            <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt={course.courseTitle || 'Course thumbnail'}
                  className="object-cover object-center h-full w-full"
                  src={course.courseThumbnail} // comes from assets.js
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                {course.courseTitle}
              </h2>
              <p className="text-base leading-relaxed mt-2">
                {course.courseDescription}
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyCourses;

