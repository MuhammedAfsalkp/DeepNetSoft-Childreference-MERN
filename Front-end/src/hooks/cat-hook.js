import {useState,useCallback} from 'react'

export const useCat = () =>{
    const [loadedCats,setLoadedCat] = useState();
    const setCat = useCallback((data)=>{
        console.log("Working");
        setLoadedCat(data);
    },[])

    return {loadedCats,setCat}
}

