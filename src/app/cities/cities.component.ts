import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { CommentStmt } from '@angular/compiler';
import { DH_CHECK_P_NOT_PRIME } from 'constants';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  constructor(private cityHttp : Http) {

    

   } // injecting the service inside the constructor . // cityHttp dependency injection inside the constructor

  ngOnInit() {
    this.getCityRecord();
  }


  private city : any = {};


  private citiesRecord : any [] = [];



  getCityRecord(){

    var cityDisplayURL = "https://myappangular-ee9f9.firebaseio.com/cities.json";

    this.cityHttp.get(cityDisplayURL).subscribe(

      (res:Response)=>{

          var resJson = res.json();
          var keys = Object.keys(resJson);

          this.citiesRecord = keys.map(function(key){
            return {
              id:key,
              cities : resJson[key]
            }
          });


        

      },
      (error)=>{
        console.log("The Error Exists"+error);
      }



    )


  }


  citySave(){


    var citysaveUrl = "https://myappangular-ee9f9.firebaseio.com/cities.json";


    this.cityHttp.post(citysaveUrl,this.city).subscribe(

      (res:Response)=>{

          
          console.log("Record Inserted Successfully");


          this.city = {};
          this.getCityRecord();

      },
      (error)=>{

        console.log("The Error Exists"+error);
        

      },
      ()=>{
        console.log("The Data Successfully Inserted");
      }



    )
 

  }



  




  cityDelete(id){
    
 

    var deleteUrl = "https://myappangular-ee9f9.firebaseio.com/cities/"+id+".json";

    this.cityHttp.delete(deleteUrl).subscribe(

      (res:Response)=>{

        
        console.log("The Record is Deleted");
        this.getCityRecord();
      },
      (error)=>{

        console.log("The Error Occured "+error);

      }


    )


  }



}
