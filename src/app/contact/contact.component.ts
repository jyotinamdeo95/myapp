import {Component, AfterViewInit, trigger, state, style, transition, animate, keyframes,OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../app.component.css'],
  animations:[
    trigger('divContact',[
        state('normal',style({
          transform:'translateY(-300px)'
        })),
        state('highlighted',style({
          transform:'translateY(0px)'
        })),
        transition('normal => highlighted' ,animate(300)),
    ])
   
]
})
export class ContactComponent implements OnInit {
  state='normal';
  ngAfterViewInit(){
    this.state='highlighted';
  }
 constructor() { }

  ngOnInit() {
  }

}
