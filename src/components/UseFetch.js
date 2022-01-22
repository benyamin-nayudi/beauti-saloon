import  { useState, useEffect } from 'react'



const useFetch = async (url) => {

    const [pending , setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [data , setData] = useState(null);

    useEffect(() => {
        const getServices  = async ()  => {
                try{
                    const services = await fetch(url);
                    if(!services.ok){
                        throw new Error('couldn\'t fetch any data')
                    }
                    const servicesData = await services.json();
                    setError(false);
                    setIsPending(false);
                    setData(servicesData);
    
                }catch(err){
                    setError(err);
                    setIsPending(false);
                }
            }

        return { pending, error, data }
    
        },[url]
        );
    
}

export default useFetch;