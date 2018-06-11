import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { error } from 'protractor';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

private users : any[];
private datamember : string = "Hello Angular";

  constructor(private x : Http) { 

    var url = "https://reqres.in/api/users?page=2";

    this.x.get(url).subscribe(
      (res:Response)=>{

        var record = res.json().data;
        this.users = record;

        console.log('Response is '+JSON.stringify(res.json()));
        console.log(url);


      },
      (error)=>{
        console.log("Error is "+error);
      }
    )

  }

  ngOnInit() {
  }



private studentId : string;
private studentName : string;
private studentAddress : string;


saveStudentRecord(){
  console.log(this.studentId,this.studentName,this.studentAddress);

  var objectSaveStudent = {
    studentId:this.studentId,
    studentName:this.studentName,
    studentAddress:this.studentAddress
    
  }
  this.studentRecords.push(objectSaveStudent);

}


  private studentRecords : any = [
    {studentId:1,studentName:'Savari',studentAddress:'Bangalore'},
    {studentId:2,studentName:'Sagaya',studentAddress:'Chennai'},
    {studentId:3,studentName:'Devan',studentAddress:'Hyderabad'} ];


}
