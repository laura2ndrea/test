import { useState, useEffect } from "react"; 
import { fetchData } from "../utils/api";

export const useFetch = (url) => {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const result = await fetchData(url); 
            if (result) {
                setData(result); 
            } else  {
                setError("Error getting data"); 
            }
            setLoading(false)
        }; 
        getData(); 
    }, [url]);
    return { data, loading, error }
};