import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { UserService } from '../service/user/user.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  nameopt:string;
  option: any;
  element:any
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   users:any;
   option:any;
   name:any;
   user:any;
   file:any;
   equipe:any;
   graphuser:any;
  constructor(private matDialog:MatDialog, private apiuser:UserService) { }
  openDialoguser(opt:string, id: any){
   
    switch(opt){
        case "voir":
          this.name="Voire un utilisateur"
          this.option=opt
          this.user=this.getuser(id)
        break;
    }
    const dialogRef =this.matDialog.open(DialogComponent,{
      data: {name: this.name,nameopt:"user", option:this.option,element:this.user},
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: '+result.nomuser);
       
    });
  }
  ngOnInit(): void {
    this.getusers()
    this.getequipes()
    const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event:any) {
        if (!form.checkValidity()) {
          console.log(event)
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }
  getuser(id:number):any{
    for (let index = 0; index < this.users.length; index++) {
      const element = this.users[index];
      console.log(element.iduser+"=="+id)
      if(element.iduser==id){
        return element
      }
      
    }
  }

  getusers(){
    this.apiuser.getuser().subscribe((res)=>{
      this.users=res.data;
      this.user=this.users[0]
      console.log(res.data)
    })}
  updateuser(form:any){
    if(this.user.iduser){
    form.value.iduser=this.user.iduser}
    if(form.value.nomuser==''){
    form.value.nomuser=this.user.nomuser}
    if(form.value.prenomuser==''){
      form.value.prenomuser=this.user.prenomuser}
    if(form.value.email==''){
    form.value.email=this.user.email}
    if(form.value.telephone==0){
      form.value.telephone=this.user.telephone}
    if(form.value.fonction==''){
        form.value.fonction=this.user.fonction}
    if(form.value.adress==''){
          form.value.adress=this.user.adress}
    this.apiuser.updateuser(form.value).subscribe((res)=>{
      console.log(res)
      this.getusers()
      alert("utilisateur modifier avec success")
    })

  }
  adduser(form:any){
    form.value.img=this.file.name
    this.uploaded()
    this.apiuser.adduser(form.value).subscribe((res)=>{
      console.log(res)
      this.getusers()
      alert("utilisateur ajouter avec success")
    })

  }
  deleteuser(id:number){
    if(confirm("vouler vous vraiment supprimer ce personnel")){
    this.apiuser.deluser(id).subscribe((res)=>{
      console.log(res)
      this.getusers()

    })}
   
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
modifuser(id:number){
  this.user=this.getuser(id)
}
filteruser(dat:string){
  this.apiuser.filteruser(dat).subscribe((res)=>{
    console.log(res)
    this.users=res
    this.users=this.users.data
  })
}

// equipe
addequipe(dataform:any){
  this.apiuser.addequipe(dataform.value).subscribe((res)=>{
    console.log(res)
    this.getequipes()
    alert("Equipe ajouter avec success")
})  
}
delequipe(id:number){
  this.apiuser.delequipe(id).subscribe((res)=>{
    console.log(res)
    alert(id)
    this.getequipes()
    alert("Equipe supprimer avec success")
},(err)=>{alert("impocible de supprimer car il comporte de membre")})  
}
getequipes(){
  this.apiuser.getequipes().subscribe((res)=>{
    this.equipe=res;
    this.equipe=this.equipe.data
})  
}
}
