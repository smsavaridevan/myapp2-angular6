import { Component, OnInit } from '@angular/core';
import { NewcalcService } from '../newcalc.service';

@Component({
  selector: 'app-newcal',
  templateUrl: './newcal.component.html',
  styleUrls: ['./newcal.component.css']
})
export class NewcalComponent implements OnInit {

  constructor( private y : NewcalcService) { }

  ngOnInit() {

    this.newCalc();
  }

  newCalc(){

    var add = this.y.addition(10, 20 ,40);
    console.log("Addition of 3 numbers is "+add);
    document.write(add);

    var sub = this.y.subtraction(30, 10);
    console.log("The Difference between "+30+" and "+10+" is "+sub);

    var division = this.y.division(30, 10);
    console.log("The Division value is "+division);

    var multiplication = this.y.multiplication(10, 20 ,30);
    console.log("The Multiplication answer is "+multiplication);
    



  }

}
