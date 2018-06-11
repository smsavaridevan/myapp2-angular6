import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import { error } from 'util';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private patientHttp : Http) { }

  ngOnInit() {
    this.getPatientRecord();
  }

  private patient : any = {};

  private patientRecord : any[] = [];


  private btn_status : boolean = true;

  private edit_id : string;


  patientSave(){

    var savePatientUrl = "https://myappangular-ee9f9.firebaseio.com/patientDetails.json";
    this.patientHttp.post(savePatientUrl,this.patient).subscribe(

      (res:Response)=>{

        console.log("Record Saved Successfully");
        this.patient = {};
        this.getPatientRecord();
      },
      (error)=>{

        console.log("The Error Exits "+error);
      },
      ()=>{
        console.log("The Data Successfully Uploaded");
      }
  
    )
  }

  getPatientRecord(){

    var getPatientUrl = "https://myappangular-ee9f9.firebaseio.com/patientDetails.json";

    this.patientHttp.get(getPatientUrl).subscribe(

      (res:Response)=>{

          var resJson = res.json();
          var keys = Object.keys(resJson);
          this.patientRecord = keys.map(function(x){
              return {
                id:x,
                patient:resJson[x]
              }
          });

      },
      (error)=>{

      }


    )

  }


  patientDelete(id){
    //    console.log(id);
    var deletePatientUrl = "https://myappangular-ee9f9.firebaseio.com/patientDetails/"+id+".json";

    this.patientHttp.delete(deletePatientUrl).subscribe(
      (res:Response)=>{

        console.log("Record Deleted Successfully");

        this.getPatientRecord();
      },
      (error)=>{
        console.log("The Error Exists "+error);
      }

    )
 
}

  
editPatient(pt){

  this.btn_status = false;
  
  this.edit_id = pt.id;
  
  this.patient = pt.patient;
  
}



patientUpdate(){
  var updateUrl = "https://myappangular-ee9f9.firebaseio.com/patientDetails/"+this.edit_id+".json";


  console.log(updateUrl);

  this.patientHttp.put(updateUrl,this.patient).subscribe(
    (res:Response)=>{
      console.log("Record Display for Update");
      
      this.patient = [];
      this.getPatientRecord();
    },
    (error)=>
    {
      console.log("The Error exists "+error);
    }
  )


}


}
