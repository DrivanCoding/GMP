import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { tacheService } from '../service/tache/tache.service';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
 taches:any;
 profile:any;
  constructor(private apitache:tacheService,private apiuser: UserService,private cookie:CookieService) { }

  ngOnInit(): void {
    this.gettache()
  }
  marquerAvancement(idtache:number,etat:string){
    const data={idtache:idtache,etattache:etat}
    this.apitache.updateetat(data).subscribe((res)=>{
   console.log(res)
    })
  }

 gettache(){
  this.apiuser.profile(this.cookie.get("user")).subscribe((res)=>{
    this.profile=res
    this.profile=this.profile.message;
    this.apitache.gettacheuser(this.profile.iduser).subscribe((res)=>{
      this.taches=res.data;
      console.log(res.data)
    }) 
  })
 
 }

}
