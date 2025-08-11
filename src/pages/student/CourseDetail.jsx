// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AppContext } from "../../context/AppContext";
// import Loading from "../../components/student/Loading";

// const CourseDetail = () => {
//   const { id } = useParams();
//   const [courseData, setCourseData] = useState(null);
//   const { allCourses } = useContext(AppContext);

//   useEffect(() => {
//     if (allCourses && allCourses.length > 0) {
//       const foundCourse = allCourses.find((course) => course._id === id);
//       setCourseData(foundCourse || null);
//     }
//   }, [id, allCourses]);

//   return courseData ? (
//     <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
//       <div className="absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70"></div>
//       {/* left column */}
//       <div className="max-w-xl z-10 text-gray-500">
//         <h1 className="lg:course-detail-heading-large md:course-detail-heading-large course-detail-heading-small font-semibold text-gray-800" dangerouslySetInnerHTML={{__html:courseData.courseTitle.slice(0,200)}}></h1>
//         <p className="pt-4 md:text-base text-sm" dangerouslySetInnerHTML={{__html:courseData.courseDescription.slice(0,200)}}></p>

//         <div>
//           <p>{courseData.enrolledStudents.length}
//             {courseData.enrolledStudents.length  > 1 ? '  students' : ' student'}
//           </p>
//         </div>
//         <p className="text-sm pt-3 text-lg">Course By <span className="text-blue-600 underline ">Muhammad Sufyan</span></p>
//       </div>
//       {/* right column */}
//       <div></div>
//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default CourseDetail;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import YouTube from "react-youtube";
import {loadStripe} from '@stripe/stripe-js'

const CourseDetail = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
    const [playerData, setPlayerData] = useState(null);


  const { allCourses , currency } = useContext(AppContext);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const foundCourse = allCourses.find((course) => course._id === id);
      setCourseData(foundCourse || null);
    }
  }, [id, allCourses]);

  // Show loading if courseData is not yet loaded
  if (!courseData) {
    return <Loading />;
  }

 return (
  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto flex flex-wrap lg:flex-nowrap gap-8">
      
      {/* LEFT SECTION */}
      <div className="lg:w-2/3 w-full lg:pr-10">
        <div className="lg:w-full flex flex-wrap">
          <div className="w-full">
            <h1 className="text-2xl title-font font-bold text-gray-500 tracking-widest">
              {courseData.courseTitle}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </a>
            </div>
            <p
              className="leading-relaxed mb-4"
              dangerouslySetInnerHTML={{
                __html: courseData.courseDescription.slice(0, 200),
              }}
            ></p>

            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Instructor</span>
              <span className="ml-auto text-blue-800">Sufyan</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Timing</span>
              <span className="ml-auto text-blue-800">2 hours</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Quality</span>
              <span className="ml-auto text-blue-800">HD preview</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                {currency}
                {(
                  courseData.coursePrice -
                  (courseData.discount * courseData.coursePrice) / 100
                ).toFixed(2)}
              </span>
              <button className="flex ml-96 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Buy Now
              </button>
              <button onClick={()=>setPlayerData({
                videoId : lecture.lectureUrl.split('/').pop()
              })} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                See Preview
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 
                    7.78l1.06 1.06L12 21.23l7.78-7.78 
                    1.06-1.06a5.5 5.5 0 000-7.78z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="lg:w-1/3 w-full bg-gray-100 p-6 rounded">
      {
        playerData ?
        <YouTube videoId={playerData.videoId} opts={{playerVars: {autoplay:1}}} iframeClassName="w-full aspect-video" /> :
        <img src={courseData.courseThumbnail} alt="" />
      }
        <div className="pt-5">
          <div>
            <img src={assets.time_left_clock_icon} alt="" />
            <p className="text-red-500">Only 5 days left for this price!</p>
            <div className="flex gap-3 items-center pt-2">
              <p className="text-gray-800 md:text-4xl text-2xl font-semibold">
               {currency}
                {(
                  courseData.coursePrice -
                  (courseData.discount * courseData.coursePrice) / 100
                ).toFixed(2)}
                </p>
                <p className="md:text-lg text-gray-500 line-through">{currency}{courseData.coursePrice}</p>
                <p className="md:text-lg text-gray-500">20% Off</p>
            </div>
            <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">
              <div className="flex">
                <img src={assets.star} alt="" /> <img src={assets.star} alt="" /> <img src={assets.star} alt="" />
              </div>

            </div>
          </div>
          <button className="md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white font-medium">{isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}</button>

        </div>
      </div>
    </div>
  </section>
);
}

export default CourseDetail;



