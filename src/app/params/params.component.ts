import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {

  profile:any={message:{
    nomuser:null,
  }};
  file:any;
  constructor(private apiprofile:UserService,private cookieuser:CookieService) { }

  ngOnInit(): void {
    this.profil()
  }
  profil(){
    this.apiprofile.profile(this.cookieuser.get("user")).subscribe((res)=>{
       console.log(res)
       this.profile=res
       this.profile=this.profile.message
    })}
    modifprofil(form:any){
        if(this.profile.iduser){
        form.value.iduser=this.profile.iduser}
        if(form.value.nomuser==''){
        form.value.nomuser=this.profile.nomuser}
        if(form.value.prenomuser==''){
          form.value.prenomuser=this.profile.prenomuser}
        if(form.value.email==''){
        form.value.email=this.profile.email}
        if(form.value.telephone==0){
          form.value.telephone=this.profile.telephone}
        if(form.value.motedepass==''){
            form.value.motedepass=this.profile.motedepass}
        if(form.value.adress==''){
              form.value.adress=this.profile.adress}
        if(!this.file){
          form.value.img=this.profile.img
        }else{
          this.uploaded()
          form.value.img=this.file.name
        }

        this.apiprofile.updateprofil(form.value).subscribe((res)=>{
          console.log(res)
          if(res.success=1){
          const load={email:form.value.email,motedepass:form.value.motedepass}
          this.login(load)
       window.location.href=window.location.href
          alert("Profile modifier avec success")}
        })
   
    }
    getfile(event:any){
      this.file=event.target.files[0]
     }
     uploaded(){
       const formData= new FormData
       formData.append('file',this.file)
       this.apiprofile.uploadprofil(formData).subscribe((res)=>{
         console.log(res)
       })
     }
     login(auth:any){

      this.apiprofile.login(auth).subscribe((res)=>{
         console.log(res)
      })}
}
