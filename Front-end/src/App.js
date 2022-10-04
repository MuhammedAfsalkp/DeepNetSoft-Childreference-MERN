import React,{useEffect,useContext} from 'react'
import {useHttpClient} from './hooks/http-hook'
import ErrorModal from './UIcomponents/ErrorModal';
import LoadingSpinner from './UIcomponents/LoadingSpinner';
import MainCat from './components/MainCat';
import SubCat from './components/SubCat';
import Tab from './components/Tab';
import {CatContext} from './context/cat-context'
import logo from './logo/logo.png'
import './App.css'


function App() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
   const ct=useContext(CatContext)
   console.log(ct.loadedCats)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/cat/633ba664d8de001ac95588ca'
          
        );
        console.log(responseData)

        ct.setCat(responseData);
      } catch (err) {}
    };
    fetchUsers();
  }, []);


  return (
 
    <React.Fragment>
      
    <ErrorModal error={error} onClear={clearError} />
    {isLoading && (<div className="center">  <LoadingSpinner /> </div> )}
    <div className='logo'><img src={logo} alt="logo"></img></div>
    {!isLoading && ct.loadedCats && <MainCat cats={ct.loadedCats} />}
    {!isLoading && ct.loadedCats && (ct.loadedCats.children.length > 0) && <SubCat cats={ct.loadedCats} />}
    {!isLoading &&  <Tab />}
   
  </React.Fragment>
 
  );
}

export default App;
