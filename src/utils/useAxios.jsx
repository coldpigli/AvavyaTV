import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (pathUrl) => {

    const [responseData, setResponseData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorFlag, setErrorFlag] = useState(false);

    const getData = async () =>{
        try{
            const received = await axios.get(pathUrl);
            if(received.status===200 || received.status===201)
            setResponseData(received.data);
        }catch(err){
            setErrorFlag(true);
            console.log("Oops somethind didn't work", err);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
      getData();
    }, [])

    return {responseData, isLoading, errorFlag}
    
}

export default useAxios;