// // import {v4 as uuidv4} from 'uuid';


// export class Cursus {
//     id;
    
//     static counter = 1;
  
//     constructor(cursusCode,cursusbegindatum,cursuseinddatum) {
//       // this.id = uuidv4(); // used to generate a unieke identifier
//       this.id = Cursus.counter++;
//       this.cursusCode = cursusCode;
//       this.cursusbegindatum = cursusbegindatum;
//       this.cursuseinddatum = cursuseinddatum;
//     }
//   }


import {v4 as uuidv4} from 'uuid';


export class Cursus {
  id;
  toetsen;
  

  constructor(cursus,code, naam, ec, done) {
    this.id = uuidv4(); // used to generate a unieke identifier
    this.cursus = cursus;
    this.code = code;
    this.naam = naam;
    this.ec = ec;
    this.toetsen = [];
    this.done = done;
  }
}