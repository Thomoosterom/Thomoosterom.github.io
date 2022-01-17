
import { store } from './AppService';
import { addCursus as addTodo, 
         deleteCursus as deleteTodo, 
         updateCursus as updateTodo,
        addToets as addToets} from './CursusActions';


export class CursusService {
  constructor() {}

  addCursus(cursus) {
    // convert it to a JSON (as a string)
    // var dictstring = JSON.stringify(task);

    // // save a file in NodeJS:
    // var fs = require('fs');
    // fs.writeFile("test.txt",dictstring);

    // console.log(dictstring)

    store.dispatch(addTodo(cursus));
  }

  addToets(cursus, toets) {
    store.dispatch(addToets(cursus, toets))
  }

  

  updateCursus(cursusId, cursus,code, naam, ec,done) {
   
    store.dispatch(updateTodo(cursusId, cursus,code, naam, ec,done));
  }

  deleteCursus(cursusId) {
    store.dispatch(deleteTodo(cursusId));
  }
  

}