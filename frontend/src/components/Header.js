import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { API_END_POINT } from "../utils/constant";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from "../redux/Slice";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <div className="absolute z-10 flex w-full items-center justify-between px-6 ">
      {user && (
        <div className="flex items-center">
          <div className="ml-4">
            <button
              onClick={logoutHandler}
              className="bg-blue-800 text-white px-4 py-2 fixed top-0 left-0 rounded-md"
            >
              Logout
            </button>
            <button onClick={toggleHandler}></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
