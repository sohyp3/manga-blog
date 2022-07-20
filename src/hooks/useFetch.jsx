import { useEffect,useState } from "react";


const useFetch = (url) => {
    
    const[data, setData]= useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    
    useEffect(()=>{
    fetch(url)
    .then(res =>{
        if(!res.ok){
            throw Error("Could not get the data")
        }
        return res.json();

    })
    .then(dataa=>{
        setData(dataa);
        setIsLoading(false);
    })
    .catch(err=>{
        setIsLoading(false);
        setError(err.message);
    })
    },[url]);
    return {data,isLoading,error}

}
 
export default useFetch;