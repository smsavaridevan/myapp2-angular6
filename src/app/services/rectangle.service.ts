import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RectangleService {

  constructor() { }

  area(l, b){
    return (l*b);
  }

  perimeter(a, b){
    return 2 * (a+b);
  }

}
