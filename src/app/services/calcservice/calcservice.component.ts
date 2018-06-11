import { Component, OnInit } from '@angular/core';
import {CalcService} from '../calc.service';
import { RectangleService } from '../rectangle.service';
@Component({
  selector: 'app-calcservice',
  templateUrl: './calcservice.component.html',
  styleUrls: ['./calcservice.component.css']
})
export class CalcserviceComponent implements OnInit {

  constructor(private x : CalcService, private y : RectangleService) { }

  ngOnInit() {
 
    this.add();

  }

  add(){

    var ans = this.x.add(10, 20);
    console.log("The Answer is "+ans);


    var ar = this.y.area(10, 3);
    console.log(ar);

    var pm = this.y.perimeter(10, 3);
    console.log(pm);
  }

}
