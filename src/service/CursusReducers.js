import { ADD_CURSUS, UPDATE_CURSUS, DELETE_CURSUS, ADD_TOETS } from './CursusActions';

const initialState = {
  cursussen: []
  
}


export const CursusReducers = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case ADD_CURSUS: 
      return {
        ...state,
        cursussen: [...state.cursussen, action.cursus]
      };


    case ADD_TOETS:
      const curs = state.cursussen.filter(cursus => cursus.cursus === action.cursus)[0];
      // const arr = curs.toetsen;
    
      return{
        ...state,
        cursussen: [curs.toetsen, action.toets]
        
        // cursussen: state.cursussen.filter(
        //   (cursus === action.cursus)  {
        //     if (cursus.cursus === action.cursus) {
        //       cursus.toetsen === toetsen;
        //       return {
        //         ...state,
        //       toetsen: [...state.toetsen, action.toets]

        //       }
        //     }
    
      };
    
      
    case UPDATE_CURSUS:
      return {
        ...state,
        cursussen: state.cursussen.map(
          (cursus) => {
            if (cursus.id === action.cursusId) {
          
              cursus.cursus === action.cursus;
              cursus.code === action.code;
              cursus.naam === action.naam;
  
              cursus.ec === action.ec;

              cursus.done = action.done;
              
            }
            return cursus;
          }
        )
      };
    case DELETE_CURSUS:
      return {
        ...state,
        cursussen: state.cursussen.filter(
          (cursus) => cursus.id !== action.cursusId
        )
      };
      
    default: 
      return state;
  }
}