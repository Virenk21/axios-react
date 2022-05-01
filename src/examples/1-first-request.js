import { useEffect } from "react";
import axios from 'axios'; 

const url = "https://random-data-api.com/api/omniauth/linkedin_get";

const FirstRequest = () => {
    const fetchData = async () => {
        try{
            const response = await axios(url);
            const data = response.data
            console.log(data);
        }catch(error) {
            console.log(error.response);
        }

    };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
};

export default FirstRequest;
