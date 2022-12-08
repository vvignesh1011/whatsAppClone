import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { message } from 'messeages';
import { MessegeService } from '../messege.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 @Output() msgEmitter=new EventEmitter<message>();

  hoveredMsg?:any;
  msgs?:message[];
  clickedMsg?:any;

  constructor(private Messege:MessegeService) { }

  ngOnInit(): void {
    this.Messege.getmsgs().subscribe(msgs=>this.msgs=msgs);
    
  }

  hovered(msg:message):void{
    this.hoveredMsg=msg;
  }

  hoverout():void{
    this.hoveredMsg=null;
  }
  clicked(msg:message):void{
    this.clickedMsg=msg;
    this.msgEmitter.emit(msg);
    
  }

}
