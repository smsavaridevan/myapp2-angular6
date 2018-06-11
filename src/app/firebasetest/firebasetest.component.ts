import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-firebasetest',
  templateUrl: './firebasetest.component.html',
  styleUrls: ['./firebasetest.component.css']
})
export class FirebasetestComponent implements OnInit {

  ngOnInit() {
  }

 private emp : any = {};

 private status : string;

 private employees : any[] = [];


 
 constructor(private x : Http) { 
  this.getRecord();
}


 getRecord(){

  var url = 'https://myappangular-ee9f9.firebaseio.com/employees.json';
  this.x.get(url).subscribe(
    (res:Response)=>{
      
      var resJson = res.json();
      var keys = Object.keys(resJson);
      this.employees = keys.map(function(x){
          return {id:x,data:resJson[x]};
      });

      console.log(this.employees);
    },
    (error)=>{
      console.log("The Error is "+error);
    }
  )



 }


 saveSubmit(){
  
  this.status = "Saving the record... ";
  var url = 'https://myappangular-ee9f9.firebaseio.com/employees.json';
  
  this.x.post(url, this.emp).subscribe(

    (res:Response)=>{

      console.log("Record Saved Successfully");
      
    },
    (error)=>{
      console.log("Error is "+error);
    },
    ()=>{
      this.status = "Record Saved Successfully"
      this.getRecord();
    }
  )
}


}
