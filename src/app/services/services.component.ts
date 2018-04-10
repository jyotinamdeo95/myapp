import {Component, AfterViewInit, trigger, state, style, transition, animate, keyframes,OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['../app.component.css'],
  animations:[
    trigger('divState',[
        state('normal',style({
          transform:'translateX(-200px)'
        })),
        state('highlighted',style({
          transform:'translateX(0px)'
        })),
        transition('normal => highlighted' ,animate(300)),
    ])
   
]
})
export class ServicesComponent implements OnInit {
  state='normal';
  ngAfterViewInit(){
    this.state='highlighted';
  }

  constructor() { }

  ngOnInit() {
  }

}
