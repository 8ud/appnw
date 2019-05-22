import { Injectable } from '@angular/core';

@Injectable()
export class StestService {

   concatDate2message(message= 'toto') : string{   //rajout d'une fonction
      return `quoi ${message} quand ${new Date()}`;
   }
   

  constructor() { }
}
