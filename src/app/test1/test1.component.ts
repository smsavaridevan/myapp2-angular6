import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Angular 4 New App';
  private newletter1 : string = "Hello";
  private newletter2 : string = "calculation";
  private number1 : number = 10;
  private number2 : number = 20;
  

  private a : number = 10;

  private tabletitle : string = "Binding the data Member";
  private tempdata : number = 100;
  private physics : number = 100;
  private maths : number = 88;
  private chemistry : number = 89;
  private english : number = 77;
  private hindi : number = 88;
  private total :number = this.chemistry + this.english + this.hindi + this.maths + this.physics;

  private numfield1 : number = 10;
  private numfield2 : number = 20;


  
  show(){
      
    var physicsValue = this.physics;
    var chemistryValue = this.chemistry;
    var mathsValue = this.maths;
    var englishValue = this.english;
    var hindiValue = this.hindi;

    var totalValue = physicsValue+chemistryValue+mathsValue+englishValue+hindiValue;
    var averageValue = totalValue/5;
    alert(totalValue);
    alert(averageValue);
     
}

sum(){
  var numfield1Value = this.numfield1;
  var numfield2Value = this.numfield2;
  alert(numfield1Value+numfield2Value);

}


private emp : any = {
first_name : 'Info',
last_name : 'Campus',
age : 11
};

private city_name : string;
private city_population : string;
private city_food : string;

private city_object : any[] = [
{city_name : 'Hyderabad',city_population : '10Millions',city_food : 'Biriyani'},
{city_name : 'Chennai',city_population : '20Millions',city_food:'Idly'},
{city_name : 'Bangalore',city_population:'10Millions',city_food:'Muddhe'}];


saveInCity(){
  console.log(this.city_name,this.city_population,this.city_food);
  
var ob = {
  city_name:this.city_name,
  city_population:this.city_population,
  city_food:this.city_food
}
this.city_object.push(ob);
}



deleteProd(index){
  this.city_object.splice(index,1);
}

}
