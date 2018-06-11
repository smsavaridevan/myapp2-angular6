import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewcalcService {

  constructor() { }


  addition(a, b, c){
    return (a+b+c);
  }

  subtraction(b, a){

    return (b-a);
  }

  multiplication(a, b, c){

    return (a*b*c);

  }

  division(b,a){
    return (b/a);
  }

}
