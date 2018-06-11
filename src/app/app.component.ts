import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

  ngOnInit() {
  }

  title = 'To Do Application';
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



};