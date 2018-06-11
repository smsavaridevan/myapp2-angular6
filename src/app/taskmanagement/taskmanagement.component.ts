import { Component, OnInit } from '@angular/core';
import { HtmlAstPath } from '@angular/compiler';
import { Http, Response } from '@angular/http';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-taskmanagement',
  templateUrl: './taskmanagement.component.html',
  styleUrls: ['./taskmanagement.component.css']
})
export class TaskmanagementComponent implements OnInit {

  constructor(private x : Http) { this.taskshow();}

  ngOnInit() {
  }

 
private recordNotFound : string;
 
  private task : any = {
    today: Date.now(),
    taskstatus : 'todo'
  }


  

  private todostatus : string;
  private tododetails : any [] = [];


  taskshow(){
    var geturl = "https://myappangular-ee9f9.firebaseio.com/taskmanagement.json";
    this.x.get(geturl).subscribe(

      (res:Response)=>{
          var resJson = res.json();
          var keys = Object.keys(resJson);
          this.tododetails = keys.map(function (x){
              return {id:x, data:resJson[x]};
          });

      },
      (error)=>{
          console.log("The Error is occured. the error is "+error);
      }



    )


  }

  tasksave(){
    this.todostatus = "Saving the Task...";
    var posturl = "https://myappangular-ee9f9.firebaseio.com/taskmanagement.json";

    this.x.post(posturl,this.task).subscribe(

      (res:Response)=>{
        //this.recordNotFound = "No Record Found";
      console.log("Record Saved successfully");
      this.task = [];
  
      this.taskshow(); 
      },
      (error)=>{
        console.log("The Error Occured during saving and the error is "+error);
      },
      ()=>  {
        this.todostatus = "Task Saved Successfully";
        
       
        console.log("Task Saved Successfully");
        
        
      }
    )
    
  }



  deletetask(id){
    var deleteUrl = "https://myappangular-ee9f9.firebaseio.com/taskmanagement/"+id+".json";


    this.x.delete(deleteUrl).subscribe(
        (res:Response)=>{
            console.log("Record Deleted ");
            this.task = {};
            this.taskshow();
        },
        (error)=>{
            console.log("Error Exists "+error);
        }


    )
 
  }

  changestatus(td){
    

  }
 

 

}
