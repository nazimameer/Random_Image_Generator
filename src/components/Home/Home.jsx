/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./Home.css";
import { Context } from "../../context/Context";
import { Button, CircularProgress } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Home = () => {
  const context = useContext(Context);
  const Navigate = useNavigate();
  const { id } = useParams();
  const [img, setImg] = useState(null);
  useEffect(() => {
    const fetchImage = () => {
      const Image = `https://images.unsplash.com/${id}`;
      setImg(Image);
    }

    if(id !== null){
      fetchImage();
    }
  }, [id]);

  const contentToShare = "Check out this beautiful image from Unsplash!";

  const handleFacebookShare = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      img
    )}`;
    window.open(facebookShareUrl);
  };

  const handleTwitterShare = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      contentToShare
    )}&url=${encodeURIComponent(img)}`;
    window.open(twitterShareUrl);
  };

  const handleWhatsAppShare = () => {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      contentToShare + " " + img
    )}`;
    window.open(whatsappShareUrl);
  };

  useEffect(() => {
    Navigate(`/home/${context.imgId}`);
  }, [context.imgId]);
  if (context.isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center bg-primary">
        <CircularProgress disableShrink />
      </div>
    );
  return (
    <div className=" bg-primary w-full h-screen flex flex-col gap-3 items-center justify-center">
      <img
        src={img}
        key={img}
        loading="lazy"
        alt="image"
        className="w-[80%] sm:h-[60vh] sm:w-[50%] object-fill"
      />
      {/* <Button variant="contained">Contained</Button> */}
      <div className="w-full flex items-center justify-center gap-3">
        <Button variant="contained" onClick={handleWhatsAppShare}>
          Whatsapp
        </Button>
        <Button variant="contained" onClick={handleFacebookShare}>
          Facebook
        </Button>
        <Button variant="contained" onClick={handleTwitterShare}>
          Twitter
        </Button>
      </div>
    </div>
  );
};

export default Home;
