import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { filterCards,orderCards } from "../../redux/action";
import { useState } from "react";



const Fav = () =>{
  const fav = useSelector((state)=>state.myFav);

  const [aux,setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (event)=>{
    dispatch (orderCards(event.target.value))
    setAux(!aux);
  };

  const handleFilter = (event) =>{
    dispatch (filterCards(event.target.value))
  };

    return(
        <>
          <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>

          <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        {
          fav.map(({id,name,species,gender,image})=>{
            return(
            <Card 
            key={id}
            id={id}
            image={image}
            name={name} 
            species={species}
            gender={gender}
            />
            );
          })  
        }
        </>
    );
};

export default Fav;