import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //user defined  event creation
  //@Output() -to share data from child to parent
  @Output() onmenuBtnClick = new EventEmitter()


  menuBtnclicked(){
    //to occur an userdefined event
    this.onmenuBtnClick.emit()


    //to resize screen
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      )
    },100)
  }
}
