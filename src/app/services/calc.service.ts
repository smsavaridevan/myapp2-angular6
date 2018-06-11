import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }


  add(a, b ){
    return (a+b);
  }
  
  sub(a, b){
    return (a-b);
  }


}
