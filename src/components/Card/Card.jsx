import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";
import { useState,useEffect } from "react";
import { Location } from "react-router-dom";



function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav,myFav}) {

const [isFav, setIsFav] = useState(false);

const handleFav = () =>{
   if (isFav){ 
      setIsFav(false);
      removeFav(id);
   }else{
      setIsFav(true);
      addFav({id, name, status, species, gender, origin, image, onClose, addFav, removeFav})
   }
};


useEffect(() => {
   myFav.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFav,id]);



   return (
      <div className={style.container}>
         <button onClick={()=>onClose(id)} className={style.myButton}> X </button>
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
         {
         isFav ? (<button onClick={handleFav}>❤️</button>)
                 :
                 (<button onClick={handleFav}>🤍</button>)
         }

 {/* se rompe al hacer click sobre el nombre, deberia llevar a detail    */}

      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (char)=>{dispatch(addFav(char))},
      removeFav: (id)=>{dispatch(removeFav(id))},
   }
}

const mapStateToProps = (state) =>{
   return{
      myFav: state.myFav,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
