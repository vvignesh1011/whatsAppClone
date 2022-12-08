import { Component } from '@angular/core';
import { message } from 'messeages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whatsapp';
  msg?:message;
  msgRecived(msg:message):void{
    this.msg=msg;
  }
}
