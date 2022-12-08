import { Component,Input, OnInit } from '@angular/core';
import { message } from 'messeages';
//import { msg } from 'msg';
import { MessegeService } from '../messege.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() msg?:message;
 update_msg?:any;
  constructor(private message:MessegeService) { }

  ngOnInit(): void {
  }

  send(val:string):void{
    this.msg?.msg.push({content:val,time:new Date(),owner:true});
    this.update_msg=this.msg;
    this.message.update(this.update_msg).subscribe();
    
    
  }

}
