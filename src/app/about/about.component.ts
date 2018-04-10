import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormsModule} from '@angular/forms';
import {Http,Headers,HttpModule,Response} from '@angular/http';
import {CommonModule} from '@angular/common';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../app.component.css']
 

})
export class AboutComponent implements OnInit {
  allowNewServer=false;
  aboutId :number=10;
  serverCreationStatus:boolean=true;
  aboutStatus: string="success returned";
  serverName="testserver here";
  serverStatus="offline";
  
  
  onCreateServer(){
    console.log('clicked');
    this.serverCreationStatus=false;
     this.aboutStatus="abcdef";
    
     
     
   } 
   getColor(){
     return this.serverStatus==='online'?'green':'red';
   }
   
    constructor() {
      this.serverStatus=Math.random() > 0.5 ?'online':'offline';
 }
 getServerStatus(){
  return this.serverStatus;

}

  ngOnInit() {
  }
  onUpdateServerName(event:Event){
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;

  }

}
