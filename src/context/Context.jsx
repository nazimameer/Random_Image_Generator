/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// Create the context object
const Context = createContext();

const Provider = ({ children }) => {
  const [imgId, setImgId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    const fetchId = async () => {
      
      try {
        const response = await axios.get(
          "https://source.unsplash.com/random/520x600/?nature" //This case we don't put it on .env bcz its a public api
        );
        let url = response.request.responseURL;
        const id = url.split("https://images.unsplash.com/")[1];
        setImgId(id);
        setIsLoading(false);
      } catch (error) {
        console.log("Something went wrong while fetching ImageId: " + error);
        setIsLoading(true);
      }
    };

    fetchId();
  }, []);

  const contextValue = {
    imgId,
    isLoading,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context, Provider };
