import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx"
import { useState, useEffect } from 'react';
import style from "./App.module.css"
import axios from "axios";
import { Routes,Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Fav from './components/Favorites/Favorites.jsx';



const userName = "mipass@mail.com";
const Password = "mipass123";

function App() {
  
  const[characters,setCharacters]=useState([]);
  const [access,setAccess] = useState(false);
  const {pathname} = useLocation();
  const Navigate = useNavigate();


  useEffect(() => {
    !access && Navigate('/');
 }, [access]);
  
   function onSearch(id) {
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (data.name && !characters.find((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('Ingresa otro ID');
          }
        })
        .catch((error) => {
          // Manejar el error de la solicitud HTTP
          console.error(error);
          window.alert('ese ID no existe');
        });
    }
    



  //  function onClose(id){
  //        setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  //  };

   const onClose = (id) =>{
    setCharacters(characters.filter((char)=>char.id !==id));
   };


   function login(userData){
    if (userData.userName===userName && userData.Password===Password){
      setAccess(true);
      Navigate("/home");
    }else{
      alert("acceso denegado");
    }
   }


   return (
  <>
    <div className={style.Nav}>
      {pathname !=="/" && <Nav onSearch={onSearch}/>}
    </div>

    <Routes>
      <Route
        path="/"
        element={<Form login={login}/>}
      />
      <Route 
        path="/home" 
        element={<Cards characters={characters} onClose={onClose}/>}
      />
      <Route
        path="/About"
        element={<About />}
      />
      <Route
        path="/Fav"
        element={<Fav />}
      />
      <Route
        path="/Detail/:detailId"
        element={<Detail />}
      />
    </Routes>      
  </>
   );
}

export default App;
