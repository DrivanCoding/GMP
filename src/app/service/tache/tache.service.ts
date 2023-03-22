import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class tacheService {
  constructor(private http:HttpClient) { }
  apiurl="http://localhost:3000/api/taches";
  
  gettache():Observable<any>{
    return this.http.get(`${this.apiurl}`);
  }
  gettacheuser(id:number):Observable<any>{
    return this.http.get(`${this.apiurl}/user/${id}`);
  }
  gettacheprojet(id:number):Observable<any>{
    return this.http.get(`${this.apiurl}/projet/${id}`);
  }
  addtache(data:any):Observable<any>{
    return this.http.post(`${this.apiurl}`+'/newtache',data);
  }
  
  deltache(id:number):Observable<any>{
    return this.http.delete(`${this.apiurl}/${id}`);
  }
  updatetache(data:any):Observable<any>{
    return this.http.post(`${this.apiurl}/updatetache`,data);
  }
  updateetat(data:any):Observable<any>{
    return this.http.post(`${this.apiurl}/updateetattache`,data);
  }

}
