import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/service/user/user.service'
import {CookieService} from 'ngx-cookie-service';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gmp';
  profile:any;
  cookieValue:any;
  constructor(private apilogin:UserService,private cookieService: CookieService){}
 
    profil(){
      if(this.cookieValue!=''){
      this.apilogin.profile(this.cookieValue).subscribe((res)=>{
         console.log(res)
         this.profile=res
         this.profile=this.profile.message;
         alert(this.profile.fonction)
      })}}  
  ngOnInit(): void {
    this.cookieValue = this.cookieService.get('user');
    this.profil()
  }
  logout(){
  this.cookieService.delete('user')
    this.cookieValue=""
  }
    }
  

