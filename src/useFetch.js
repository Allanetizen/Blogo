import { useEffect } from "react";
import { useState } from "react";
const UseFetch =(url)=>{

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    //not stored in a constant
  //fires on every render,
  //adding a dependency [], fires it once
  useEffect(() => {
    setTimeout(() => {
      //fires the function once the promise has been
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not FETCH the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
    }, 1000);
  }, [url]);

    return{ data, isPending,error}
}
export default UseFetch;