import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }
  apiurl="http://localhost:3000/api/msg";
  apiurlupload="http://localhost:3000/upload";;
  
  sendmsg(data:any):Observable<any>{
    return this.http.post(`${this.apiurl}`+'/newmsg',data);
  }
  getmsgs():Observable<any>{
    return this.http.get(`${this.apiurl}`);
  }
  
}
