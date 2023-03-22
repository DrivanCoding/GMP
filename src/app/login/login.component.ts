import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 opt:string="login";
 file:any;
  constructor(private apiuser:UserService,private cookieService: CookieService) { }  ngOnInit(): void {
  }
  login(auth:any){
    console.log(auth)
    this.apiuser.login(auth).subscribe((res)=>{
       alert(res.message)
       if(res.message){
       this.cookieService.set('user',res.data.email);
       window.location.href=window.location.href
       console.log(res)
      }
    })}
    changeopt(option:string){
      this.opt=option
    }
    signin(formdata:any){
      formdata.fonction="client"
      console.log(formdata)
      if(this.file){
        this.uploaded()
        formdata.img=this.file.name
      }
      this.apiuser.adduser(formdata).subscribe((res)=>{
        alert("vous avez etes inscrire avec sucesser")
        if(res.success=1){
          this.login(formdata)
       }
     })
    }

    getfile(event:any){
      this.file=event.target.files[0]
     }
     uploaded(){
       const formData= new FormData
       formData.append('file',this.file)
       this.apiuser.uploadprofil(formData).subscribe((res)=>{
         console.log(res)
       })
     }
}
