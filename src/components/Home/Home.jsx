/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";
import "./Home.css";
const Home = () => {
  const [img, setImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          "https://source.unsplash.com/random/520x600/?nature"
        );
        const imageUrl = response.request.responseURL;
        setImg(imageUrl);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching image:", error);
        setIsLoading(false);
      }
    };

    fetchImage();
  }, []);

  const contentToShare = "Check out this beautiful image from Unsplash!";
  const encodedImgUrl = encodeURIComponent(img);
  const encodedContent = encodeURIComponent(contentToShare + " " + img);

  const handleShare = (url) => {
    window.open(url);
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-primary">
        <CircularProgress disableShrink />
      </div>
    );
  }
  return (
    <div className="bg-primary w-full h-screen flex flex-col gap-3 items-center justify-center">
      <img
        src={img}
        key={img}
        loading="lazy"
        alt="image"
        className="w-[80%] sm:h-[60vh] sm:w-[50%] object-fill"
      />
      <div className="w-full flex items-center justify-center gap-3">
        <Button
          variant="contained"
          onClick={() =>
            handleShare(`https://api.whatsapp.com/send?text=${encodedContent}`)
          }
        >
          Whatsapp
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            handleShare(
              `https://www.facebook.com/sharer/sharer.php?u=${encodedImgUrl}`
            )
          }
        >
          Facebook
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            handleShare(
              `https://twitter.com/intent/tweet?text=${encodedContent}&url=${encodedImgUrl}`
            )
          }
        >
          Twitter
        </Button>
      </div>
    </div>
  );
};

export default Home;
