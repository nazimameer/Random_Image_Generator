/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import "./Home.css";
import { Button, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
const Home = () => {
  const [img, setImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const fetchId = async () => {
      try {
        const response = await axios.get(
          "https://source.unsplash.com/random/520x600/?nature" //This case we don't put it on .env bcz its a public api
        );
        let url = response.request.responseURL;
        setImg(url);
        setIsLoading(false);
      } catch (error) {
        console.log("Something went wrong while fetching ImageId: " + error);
      }
    };

    fetchId();
  }, []);

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

  if (isLoading)
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
