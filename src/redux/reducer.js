import { CLEAN_DETAIL, FILTER, REMOVE_FAV,ORDER } from "./action";
import { ADD_FAV } from "./action";
import { GET_CHARACTER_DETAIL } from "./action";

const initialstate = {
        myFav:[],
        charDetail:{},
        allCharacters:[],
};

const rootReducer = (state = initialstate,action)=>{ /*siempre el estado va a recibir un estado y una accion*/
    switch (action.type){
        case ADD_FAV:
            return {...state, myFav:[...state.allCharacters, action.payload],
                              allCharacters:[...state.allCharacters, action.payload],
                   };

        case REMOVE_FAV:
            return {...state, myFav: state.myFav.filter(
                char=>char.id!==action.payload)};

        case GET_CHARACTER_DETAIL:
            return {...state, charDetail: action.payload};

        case CLEAN_DETAIL:
            return {...state, charDetail:{},};

        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter
            ((char)=>char.gender===action.payload);
            return {...state, myFav:allCharactersFiltered};

        case ORDER:
            const allCharactersCopy = [...state.allCharacters];
            return{...state, myFav:action.payload==="A"
                             ? allCharactersCopy.sort((a,b)=>a.id-b.id)
                             : allCharactersCopy.sort((a,b)=>b.id-a.id)
                  };

        default:
            return {...state};
    }
};

export default rootReducer;
/* exportamos el reducer por que queremos que lo encuentre el provider en index.js*/