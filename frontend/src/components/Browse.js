import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import image from "../assets/Property 1=Hero F0.png";
import image1 from "../assets/Property 1=Hero F1.png";
import image2 from "../assets/Property 1=Hero F2.png";
import image3 from "../assets/Property 1=Hero F3.png";



const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Header />

      <div>
        <img
          className="w-[98vw] space-y-32  h-[100vh] mt-4 ml-4 mr-4 mb-20 border-2 border-t-rose-600 rounded-md animate-[fed-in_5s_ease-in-out_infinite]"
          src={image}
          alt=""
        />
        <img
          className="w-[98vw] h-[100vh] mt-4 ml-4 mb-20 border-2 border-t-rose-600 rounded-md animate-[fed-in_9s_ease-in-out_infinite]"
          src={image1}
          alt=""
        />
        <img
          className="w-[98vw] h-[100vh] mt-4 ml-4 mb-20 border-2 border-t-blue-400 rounded-md animate-[fed-in_12s_ease-in-out_infinite]"
          src={image2}
          alt=""
        />
        <img
          className="w-[98vw] h-[100vh] mt-4 ml-4 mb-20 rounded-md border-2 border-t-orange-500 animate-[fed-in_15s_ease-in-out_infinite]"
          src={image3}
          alt=""
        />
      </div>
    </div>
  );
};

export default Browse;
