import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testexample : string = "Test by arun";
  
  testarun : string = "Arun Kumar BSC ";
  

  testNumber : number = 34234;

  age : number = 123;


  sum(){

    var a = "123";
    var b = parseInt(a);
    //alert(b);
    alert(this.age);

  }

  clickFunc(){
    var testVar = "Hello Angular 2";
    var testvar2 = null;
    alert(testvar2);
  }


}
