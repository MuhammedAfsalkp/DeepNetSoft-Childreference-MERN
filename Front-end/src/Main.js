import { CatContext } from "./context/cat-context";
import { useCat } from "./hooks/cat-hook";
import App from "./App";

const Main = () =>{
    const {loadedCats,setCat} = useCat()
    return(
        <CatContext.Provider value={{loadedCats:loadedCats,setCat:setCat}}>
             <App></App>
        </CatContext.Provider>
    )
}


export default Main;