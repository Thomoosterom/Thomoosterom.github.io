export const ADD_CURSUS = 'ADD_CURSUS';
export const ADD_TOETS = 'ADD_TOETS';
export const DELETE_CURSUS = 'DELETE_CURSUS';
export const UPDATE_CURSUS = 'UPDATE_CURSUS';

export const addCursus = (cursus) => {
  return {
    type: ADD_CURSUS,
    cursus: cursus
  }
}

export const addToets = (cursus, toets) => {
  return {
    type: ADD_TOETS,
    cursus: cursus,
    toets : toets
  }
}

export const updateCursus = (id,cursus,code, naam, ec, done) => {
  return {
    type: UPDATE_CURSUS,
    cursusId: id,
    cursus:cursus,
    code:code,
    naam:naam,
    ec:ec,
    done: done
  }
}

export const deleteCursus = (id) => {
  return {
    type: DELETE_CURSUS,
    cursusId: id
  }
}




// export const addToets = (toets) => {
//   return {
//     type: ADD_TOETS,
//     toets: toets
//   }
// }

// export const updateToets = (id,toets, toetsvorm, weging, ectoets, periode, programmaleider) => {
//   return {
//     type: UPDATE_TOETS,
//     id: id,
//     toets:toets,
//     toetsvorm:toetsvorm,
//     wegin:weging,
//     ectoets:ectoets,
//     periode: periode,
//     programmaleider: programmaleider
//   }
// }

// export const deleteToets = (id) => {
//   return {
//     type: DELETE_TOETS,
//     id: id
//   }
// }