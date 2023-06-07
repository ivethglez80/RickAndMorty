import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.container}>
         <button onClick={()=>onClose(id)} className={style.myButton}>X</button>
         <img src={image} alt=''/>
         <div className={style.charData}>
         <p>{species}</p>
         <p>{gender}</p>
         <p>{status}</p>
         <p>{origin}</p>
         </div>
         <Link to={`/detail/${id}`}>
            <h3 className={style.overlayName}>{name}</h3>
         </Link>
      </div>
   );
}
