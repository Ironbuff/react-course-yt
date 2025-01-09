import { useEffect,useState } from "react";

function useCurrencyInfo(){
    // here {} is put inside the usestate hook to fetch object from array
    const [data,setData]= useState({})
    useEffect(()=>{
        // now to use fetch we use fetch along with backend for url
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // here we use currency to take currency value as user calling the hook using currency variable
        .then((res)=>res.json()) 
        // in this the res get data from url in json this is called
        .then((res)=>setData(res(currency)))
        // in this we fetch data into setData method since data on only id usd will be inserted
       
    },[currency])
    console.log(data); 
    // to see what value prints we can see in console for confirmation and similarly data will be returned since this is the hook
    return data
}
export default useCurrencyInfo