import { Component, OnInit } from '@angular/core';
import { HtmlAstPath } from '@angular/compiler';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor( private x : Http) { this.getuserlist(); }

  ngOnInit() {
  }
  
  private deleteStatus : string;  

  private state : any = ['India','Pakistan','Afganistan','Sri Lanka'];

  private gender : any = ['Male','Female','Other']; 


  private user : any = {};

  private userlist : any[] = [];

  userRegister(){

    var registerUrl = "https://myappangular-ee9f9.firebaseio.com/userlist.json";

    this.x.post(registerUrl,this.user).subscribe(

      (res:Response)=>{
          console.log("User Record Submitted Successfully");
          this.user = {};
          this.getuserlist();
      },
      (error)=>{
        console.log("The Error Occured and the error is "+error);
      },
      ()=>{
        console.log("User Record Successfully Saved");
      }


    )



  }


  

  getuserlist(){
    var registerUrl = "https://myappangular-ee9f9.firebaseio.com/userlist.json";

    this.x.get(registerUrl).subscribe(
        (res:Response)=>{
          var resJson = res.json();
          var keys = Object.keys(resJson);
          this.userlist = keys.map(function (y){
              return {id:y, data:resJson[y]};
          });
          console.log("Record is "+this.userlist);
        },
        (error)=>{
          console.log("Error Exists"+error);
        }

    )
 
  }


  deleteUser(id){
    var deleteUserUrl = "https://myappangular-ee9f9.firebaseio.com/userlist/"+id+".json";
      
    this.x.delete(deleteUserUrl).subscribe(
      (res:Response)=>{
        console.log("Deleted User Record");
        this.deleteStatus = "Deleted User Record";
        this.getuserlist();
      },
      (error)=>{
        console.log("The Error Exists "+error);
      }


    )

 

  }




}
