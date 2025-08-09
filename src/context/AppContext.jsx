import { createContext, useState, useEffect } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;

const navigate = useNavigate()

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setisEducator] = useState(true);


  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses); // Set dummy data
  };

  useEffect(() => {
    fetchAllCourses(); // Call when component mounts
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    isEducator,
    setisEducator,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
