import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } 
        else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch(error => {
        console.error(error);
        window.alert('Ocurrió un error al obtener los datos');
      });
  }, [detailId]);

  if (character === null) {
    return <div>Cargando...</div>; // Mostrar un mensaje de carga mientras se obtienen los datos
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.gender}</p>
      <p>{character.origin.name}</p>
      <img src={character.image} alt="img" />
    </div>
  );
};

export default Detail;
