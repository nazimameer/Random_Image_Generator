import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/Context";
import { CircularProgress } from "@mui/material";
const Navigator = () => {
  const context = useContext(Context);

  if (context.isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center bg-primary">
        <CircularProgress disableShrink />
      </div>
    );
  return <Navigate to={`/home/${context.imgId}`} />;
};

export default Navigator;
