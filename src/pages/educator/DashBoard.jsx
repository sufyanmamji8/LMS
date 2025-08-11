import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { assets, dummyDashboardData } from "../../assets/assets";
import Loading from "../../components/student/Loading";

const DashBoard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const { currency } = useContext(AppContext);

  // Function to load dashboard data
  const fetchDashboardData = async () => {
    // Simulating API by using dummy data
    setDashboardData(dummyDashboardData);
  };

  // useEffect should be here, not inside the function
  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className="min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-5 items-center">
          
          {/* Total Students */}
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.patients_icon} alt="Students" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.enrolledStudentsData.length}
              </p>
              <p className="text-base text-gray-500">Total Students</p>
            </div>
          </div>

          {/* Total Courses */}
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.appointments_icon} alt="Courses" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.totalCourses}
              </p>
              <p className="text-base text-gray-500">Total Courses</p>
            </div>
          </div>

          {/* Total Earnings */}
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.earning_icon} alt="Earnings" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {currency}{dashboardData.totalEarnings}
              </p>
              <p className="text-base text-gray-500">Total Earnings</p>
            </div>
          </div>

        </div>
        <div className="">
<h2 className="pb-4 text-lg font-medium">Latest Enrollments</h2>
<div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-mg bg-white border border-gray-500/20">

</div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default DashBoard;

