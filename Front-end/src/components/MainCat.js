import './MainCat.css';

const MainCat = (props) => {
    return(
        <div className="head">
            <h3>{props.cats.name}  ({props.cats.count})</h3>
            
        </div>
    )
}

export default MainCat;