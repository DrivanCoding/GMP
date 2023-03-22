import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ChatService } from '../service/chat/chat.service';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
 profile:any;
 msgs:any;
 msg:any;
  constructor(private apichat:ChatService,private apiprofil:UserService,private cookieService: CookieService) {  }

  ngOnInit(): void {
    this.profil()
    setInterval(()=>{   
    this.getmsgs()
    },1000)
  }
  profil(){
    
    this.apiprofil.profile(this.cookieService.get("user")).subscribe((res)=>{
       console.log(res)
       this.profile=res
    })}
  getmsgs(){
    this.apichat.getmsgs().subscribe((res)=>{
      this.msgs=res.data
      console.log(res)
   })
  }

  sendmsg(formdata:any){
    formdata.iduser=this.profile.message.iduser
    alert(formdata)
    alert(this.profile.message.iduser)
    this.apichat.sendmsg(formdata).subscribe((res)=>{
      this.getmsgs()
   })
  }
positionmsg(id:number):any{
  if(id==this.profile.message.iduser){
    return "right"
  }else{
    return "left"
  }
}
}
