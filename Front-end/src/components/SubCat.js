import './SubCat.css';
import  Card from '../UIcomponents/Card'
import { useHttpClient } from '../hooks/http-hook';
import { useContext } from 'react';
import { CatContext } from '../context/cat-context';


const SubCat = (props) => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
     const count=props.cats.childCount;
    const ct= useContext(CatContext)
    const clickHandler =async (event,key) => {
        console.log("working",key)
        try {
           
            const resp =await sendRequest(`http://localhost:5000/api/cat/${key}`)
              ct.setCat(resp);
            }
            
           catch (err) {}

    }
    return(

        <Card className="centre">
           <ul className='cat-list'>
            {
                props.cats.children.map(el=>
                <li key={el._id}><div className='sub' onClick={e=>clickHandler(e,el._id)}> {`${el.name} (${count}`})</div></li>)
            }
           </ul>

        </Card>
    )
}

export default SubCat;
