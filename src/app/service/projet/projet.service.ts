import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  constructor(private http:HttpClient) { }
  apiurl="http://localhost:3000/api/projets";
  apiurlsprint="http://localhost:3000/api/sprints";
  apiurlres="http://localhost:3000/api/res";
  apiurldocs="http://localhost:3000/api/docs";
  
  getprojet():Observable<any>{
    return this.http.get(`${this.apiurl}`);
  }
  addprojet(data:any):Observable<any>{
    return this.http.post(`${this.apiurl}`+'/newprojet',data);
  }
  
  delprojet(id:number):Observable<any>{
    return this.http.delete(`${this.apiurl}/${id}`);
  }
  updateprojet(data:any):Observable<any>{
    return this.http.post(`${this.apiurl}/updateprojet`,data);
  }
 
  //pour les sprint

  getsprint(id:number):Observable<any>{
    return this.http.get(`${this.apiurlsprint}/${id}`);
  }
  getsprints():Observable<any>{
    return this.http.get(`${this.apiurlsprint}/`);
  }
  addsprint(data:any):Observable<any>{
    return this.http.post(`${this.apiurlsprint}`+'/newsprint',data);
  }
  
  delsprint(id:number):Observable<any>{
    return this.http.delete(`${this.apiurlsprint}/${id}`);
  }
  updatesprint(data:any):Observable<any>{
    return this.http.post(`${this.apiurlsprint}/updatesprint`,data);
  }


  // ressource
 
  getres(id:number):Observable<any>{
    return this.http.get(`${this.apiurlres}/${id}`);
  }
  getress():Observable<any>{
    return this.http.get(`${this.apiurlres}/`);
  }
  addres(data:any):Observable<any>{
    return this.http.post(`${this.apiurlres}`+'/newres',data);
  }
  
  delres(id:number):Observable<any>{
    return this.http.delete(`${this.apiurlres}/${id}`);
  }
  updateres(data:any):Observable<any>{
    return this.http.post(`${this.apiurlres}/updateres`,data);
  }

// docs
newdocs(data:any){
  return this.http.post(`${this.apiurldocs}/newdoc`,data);
} 
getdocs(id:number):Observable<any>{
  return this.http.get(`${this.apiurldocs}/${id}`);
}
getdocss():Observable<any>{
  return this.http.get(`${this.apiurldocs}/`);
}
deldocs(id:number):Observable<any>{
  return this.http.delete(`${this.apiurldocs}/${id}`);
}
updatedocs(data:any):Observable<any>{
  return this.http.post(`${this.apiurldocs}/updatedoc`,data);
}

}
