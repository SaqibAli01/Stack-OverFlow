import React from "react";
import { useDispatch } from "react-redux";
// import { logout } from "../path/to/authSlice"; // Update the path to authSlice
import { Button } from "@mui/material";
import { logout } from "../../ReduxToolKit/userSlice";

function LogoutUser() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem("token");
  };

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default LogoutUser;
