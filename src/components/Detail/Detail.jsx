
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterDetail,cleanDetail } from "../../redux/action";


const Detail = () => {
  const { detailId } = useParams();
  const character = useSelector((state)=>state.getCharacterDetail);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getCharacterDetail(detailId));
  }, [detailId]);

 

  return (
    <div>
      {character.name?(
      <> 
      <h2>{character.name}</h2>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.gender}</p>
      <p>{character.origin?.name}</p>
      <img src={character.image} alt="img" />
      </>
  ):(
    <h3>Loading...</h3>
  )}
    </div>
  );
};

export default Detail;
