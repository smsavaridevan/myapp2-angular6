import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {


private doctor : any = {};


 private doctordetails : any[] = [];
  private status : string;

  constructor(private x : Http) { 

    this.getDoctorDetails();

  }

  ngOnInit() {
  }




  getDoctorDetails(){

    var url = "https://myappangular-ee9f9.firebaseio.com/doctordetails.json";
    this.x.get(url).subscribe(

      (res:Response)=>{
      
        var resJson = res.json();
        var keys = Object.keys(resJson);
        this.doctordetails = keys.map(function(x){
            return {id:x,data:resJson[x]};
        });
        console.log(this.doctordetails);
      },
      (error)=>{
        console.log("The Error is "+error);
      }
    )

 
  }

 


  submitDoctorRecor(){

    this.status = "Record Saving...";
    var url = "https://myappangular-ee9f9.firebaseio.com/doctordetails.json";
    
    this.x.post(url,this.doctor).subscribe(
      (res:Response)=>{
        console.log("Record Saved Successfully");
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        this.status = "Record Saved Successfully";
        this.doctor= [];
        
        console.log("Record Saved Successfully");
        this.getDoctorDetails();
      }
    )

  }


}
