import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {


  private users : any[];
  constructor(private x : Http) {

    var url = "https://reqres.in/api/users";
    
    this.x.get(url).subscribe(
      (res:Response)=>{
        
        var record = res.json().data;
        this.users = record;

        console.log("Works Fine"+JSON.stringify(res.json()));
      },
      (error)=>{
        console.log(""+error);
      }
    )



   }

  ngOnInit() {
  }


  private name : string;
  private address : string;
  private mobile : number;


  private person_details : any = [
    {name:'Savari',address:'Bangalore',mobile:8147246904},
    {name:'Sagaya',address:'Chennai',mobile:9738913893},
    {name:'Devan',address:'Kolkata',mobile:8147246905}
  ];


  submitRecord(){

    var saveobject = {
      name:this.name,
      address:this.address,
      mobile:this.mobile
    }
    this.person_details.push(saveobject);

  }


}
