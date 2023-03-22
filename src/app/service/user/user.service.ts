import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  apiurl="http://localhost:3000/api/users";
  apiurlupload="http://localhost:3000/upload";
  apiurlequipe="http://localhost:3000/api/equipe";
  
  getuser():Observable<any>{
    return this.http.get(`${this.apiurl}`);
  }
  adduser(data:any):Observable<any>{
    return this.http.post(`${this.apiurl}`+'/newuser',data);
  }
  login(data:any):Observable<any>{
    return this.http.post(`${this.apiurl}`+'/login',data);
  }
  deluser(id:number):Observable<any>{
    return this.http.delete(`${this.apiurl}/${id}`);
  }
  updateuser(data:any):Observable<any>{
    return this.http.post(`${this.apiurl}/updateuser`,data);
  }
  updateprofil(data:any):Observable<any>{
    return this.http.post(`${this.apiurl}/updateprofil`,data);
  }
  uploadprofil(data:any):Observable<any>{
    return this.http.post(`${this.apiurlupload}`,data);
  }
  addequipe(data:any){
    return this.http.post(`${this.apiurlequipe}/newequipe`,data);
  }
  getequipes(){
    return this.http.get(`${this.apiurlequipe}`);
  }
  getuserequipes(id:number){
    return this.http.get(`${this.apiurl}/membre/${id}`);
  }
  upequipe(data:any){
    return this.http.post(`${this.apiurlequipe}/updateequipe`,data);
  }
  delequipe(id:number):Observable<any>{
    return this.http.delete(`${this.apiurlequipe}/${id}`);
  }
  profile(email:string){
    return this.http.get(`${this.apiurl}/profil/${email}`);
  }
  filteruser(filter:string){
    return this.http.get(`${this.apiurl}/${filter}`);

  }
}
