import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {



  private student : any = {};
  private status : string;
  private studentRecord : any[] = [];

  constructor(private x : Http) { 
    this.getStudentDetails();
  }

  ngOnInit() {
  }
  
  getStudentDetails(){

    var getUrl = "https://myappangular-ee9f9.firebaseio.com/studentRecord.json";

    this.x.get(getUrl).subscribe(
        (res:Response)=>{

          var resJson = res.json();
          var keys = Object.keys(resJson);
          this.studentRecord = keys.map(function(x){
              return {id:x, data:resJson[x]};
          });


        },
        (error)=>{
          console.log("The Error is "+error);
        }

    )

  }

 

  submitRecord(){

    this.status = "Saving Student Record";
    var posturl = "https://myappangular-ee9f9.firebaseio.com/studentRecord.json";

    this.x.post(posturl,this.student).subscribe(

      (res:Response)=>{
        console.log("Record Saved Successfully");
      },
      (error)=>{
        console.log("The Error is "+error);
      },
      ()=>{
        this.student = [];
        this.status = "Student Record is Saved Successfully";
        this.getStudentDetails();
      }
      


    )


  }


}
