import Card from '../Card/Card';
import style from "./Cards.module.css";

export default function Cards({characters, onClose}) {
   return (
   <div className={style.containerCards}>
      {
         characters.map(({id,image,name,status,species,gender,origin})=>{
            return (
               <Card 
                 key={id}
                 id={id}
                 image={image}
                 name={name}
                 status={status}
                 species={species}
                 gender={gender}
                 origin={origin.name} 
                 onClose={onClose}
                 
               />
            )
         })
      }
   </div>
   );
}

