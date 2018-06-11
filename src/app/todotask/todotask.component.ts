import { Component, OnInit } from '@angular/core';
import { HtmlAstPath } from '@angular/compiler';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-todotask',
  templateUrl: './todotask.component.html',
  styleUrls: ['./todotask.component.css']
})
export class TodotaskComponent implements OnInit {


  private task : any = {};
  private pagestatus : string;
  private tastrecord : any[] = [];

  constructor(private x : Http) {  
    this.showtodaytask();
  }

  ngOnInit() {
  }


  showtodaytask(){
    var geturl = "https://myappangular-ee9f9.firebaseio.com/taskRecords.json";
    this.x.get(geturl).subscribe(

      (res:Response)=>{
        var resJson = res.json();
        var keys = Object.keys(resJson);
        this.tastrecord = keys.map(function(x){
            return {id:x, data:resJson[x]};
        });
      },
      (error)=>{
        console.log("Error is "+error);
      }




    )
  }


  savetodaytask(){  

    this.pagestatus = "Task Submitting...";
    var posturl = "https://myappangular-ee9f9.firebaseio.com/taskRecords.json";

    this.x.post(posturl,this.task).subscribe(

      (res:Response)=>{

        console.log("Record Saved Successfully");

      },
      (error)=>{

        console.log("The Error is "+error);
      },
      ()=>{
        this.task = [];
        this.pagestatus = "Task submitted successfully :)";
        console.log("The Record Successfully Submitted");
        this.showtodaytask();
      }



    )


  }

}
