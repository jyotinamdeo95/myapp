import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer) {
  }
  onMenuClick() {
    //this.el.nativeElement.querySelector('.navbar-ex1-collapse')  get the DOM
    //this.renderer.setElementClass('DOM-Element', 'css-class-you-want-to-add', false) if 3rd value is true 
    //it will add the css class. 'in' class is responsible for showing the menu, remove it.
    this.renderer.setElementClass(this.el.nativeElement.querySelector('.navbar-ex1-collapse'), 'in', false);        
}
  onHome(){
    let x=document.querySelector("#home");
    if(x){
      x.scrollIntoView();
    }
  }
  onContact(){
    let x=document.querySelector("#contact");
    if(x){
      x.scrollIntoView();
    }
  }
  onPortfolio(){
    let x=document.querySelector("#portfolio");
    if(x){
      x.scrollIntoView();
    }
  }
  onServices(){
    let x=document.querySelector("#services");
    if(x){
      x.scrollIntoView();
    }
  }
  onAbout(){
    let x=document.querySelector("#about");
    if(x){
      x.scrollIntoView();
    }
  }
  ngOnInit() {
  }

}
