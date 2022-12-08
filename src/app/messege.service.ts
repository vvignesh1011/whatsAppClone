import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { message } from 'messeages';
import { msgList } from 'mockMsg';
import { catchError, Observable, of, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessegeService {
  msgurl="api/message";
  constructor(private http:HttpClient) { }
  
  getmsgs():Observable<message[]>{
   //const msgs =of(msgList);
    //return msgs;

    return this.http.get<message[]>(this.msgurl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  update(msg:message):Observable<any>{
   return this.http.put(`${this.msgurl}/${msg.id}`,msg);
  }

  
}
