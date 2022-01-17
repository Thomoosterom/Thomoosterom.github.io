import {v4 as uuidv4} from 'uuid';

export class Toets {
  id;
  

  constructor(toets, toetsvorm, weging, ectoets, periode, programmaleider) {
    this.id = uuidv4(); // used to generate a unieke identifier
    this.toets = toets;
    this.toetsvorm = toetsvorm;
    this.weging =weging;
    this.ectoets = ectoets;
    this.periode = periode;
    this.programmaleider = programmaleider;
  }
}