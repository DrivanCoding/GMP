import { Component, OnInit } from '@angular/core';
import {ProjetService} from '../service/projet/projet.service'
import { tacheService } from '../service/tache/tache.service';
import {UserService} from '../service/user/user.service'
import {Chart,ChartConfiguration,ChartItem,registerables,} from 'node_modules/chart.js'
@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
   datenow:any = Date();
   projets:any;
   projet:any;
   equipe:any;
   sprints:any;
   sprint:any;
   taches:any;
   docs:any;
   ress:any;
   nbrsprint:any;
   nbrdoc:any;
   nbrres:any;
   nbrtache:any;
   userprojet:any={data:{iduser:null,nomuser:null}};
   doc:any={nomdoc:""};
   

  constructor(private apiprojet:ProjetService,private apiuser:UserService,private apitache:tacheService ) { }
  getprojets(){
    this.apiprojet.getprojet().subscribe((res)=>{
      this.projets=res.data;
      console.log(res.data)
    })
  }
  ngOnInit(): void {
    alert(this.datenow)
    
    this.getprojets()
    this.getequipe()
    setInterval(()=>{
      const graphprojet=document.querySelector('#graphprojet')
      this.newchart('line',graphprojet,{
        labels: [ 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label:'Taux risque',
          data: [ 19, 3, 5, 2, 3],
          borderWidth: 3,
          backgroundColor: 'red',
          borderColor: 'red',
        tension:0.2 
          },{
            label:'Taux succes',
            data: [ 2, 3, 8, 12, 8],
            borderWidth: 3,
            backgroundColor: 'green',
            borderColor:'green',
          tension:0.2 
    
          }]
      })
      const graphetat=document.querySelector('#graphetat')
      this.newchart('doughnut',graphetat,{
        labels: [ 'A Faire', 'En Cours', 'Terminer'],
        datasets: [{
          label:'',
          data: [ 19, 3, 5],
          borderWidth: 0.1,
          backgroundColor: [ '#0d6efd', 'rgb(255 152 0 / 89%)', 'rgb(58 202 13 / 91%)'],
          
        tension:0.2 
  
        }]
      })

      this.apiprojet.getsprints().subscribe((res)=>{
       this.nbrsprint=res.data.length
      })
      this.apiprojet.getdocss().subscribe((res)=>{
        this.nbrdoc=res.data.length
      })
      this.apiprojet.getress().subscribe((res)=>{
        this.nbrres=res.data.length
      })
      this.apitache.gettache().subscribe((res)=>{
        this.nbrtache=res.data.length
      })
    },1000)
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

  // projet fonction
  addprojet(data:any){
   this.apiprojet.addprojet(data.value).subscribe((res)=>{
    console.log(res)
    this.getprojets()
  })
  alert("projet ajouter avec sucess")
  } 

  modifprojet(data:any){
    this.apiprojet.updateprojet(data.value).subscribe((res)=>{
      console.log(res)
    })
  }
  delprojet(id:number){
    this.apiprojet.delprojet(id).subscribe((res)=>{
      console.log(res)
    })
  }
  getprojet(id:number):any{
    for (let index = 0; index < this.projets.length; index++) {
      const element = this.projets[index];
      console.log(element.idprojet+"=="+id)
      if(element.idprojet==id){
        this.projet=element
        break;
      }
      
    }
    
    this.getsprints()
    this.getdocs()
    this.gettache()
    this.getress()
    this.getuserequipe()
  }
  

  //equipe fonction 
  getequipe(){
    this.apiuser.getequipes().subscribe(
      (res)=>{
        this.equipe=res
        this.equipe=this.equipe.data
        console.log(this.equipe.data)
      })
  } 
  getuserequipe(){
    this.apiuser.getuserequipes(this.projet.idequipe).subscribe(
      (res)=>{
        this.userprojet=res
        console.log(this.userprojet.data)
      })
  }

  // fonction sprint

  getsprints(){
    this.apiprojet.getsprint(this.projet.idprojet).subscribe((res)=>{
      this.sprints=res.data;
      console.log(res.data)
    })
  }

  addsprint(data:any){
    data.value.idprojet=this.projet.idprojet
    this.apiprojet.addsprint(data.value).subscribe((res)=>{
      this.getsprints()
   })
   alert("sprint ajouter avec sucess")
   } 
 
   modifsprint(data:any){
     this.apiprojet.updatesprint(data.value).subscribe((res)=>{
       console.log(res)
     })
   }
   delsprint(id:number){
     this.apiprojet.delsprint(id).subscribe((res)=>{
       console.log(res)
     })
   }
  
  //  ressource
  
  getress(){
    this.apiprojet.getres(this.projet.idprojet).subscribe((res)=>{
      this.ress=res.data;
      console.log(res.data)
    })
  }

  addres(data:any){
    data.idprojet=this.projet.idprojet
    this.apiprojet.addres(data.value).subscribe((res)=>{
     console.log(res)
     this.getress()
   })
   alert("Resssource ajouter avec sucess")
   } 
 
   modifres(data:any){
     this.apiprojet.updateres(data.value).subscribe((res)=>{
       console.log(res)
     })
   }
   delres(id:number){
     this.apiprojet.delres(id).subscribe((res)=>{
       console.log(res)
     }) 
   }


// upload document
uploaded(event:any){
  const formData= new FormData
  const docs=event.target.files[0]
  const doc={idprojet:this.projet.idprojet,nomdoc:docs.name,type:docs.type}
  formData.append('file',docs)
  if(docs.type=="application/pdf"){
    this.apiuser.uploadprofil(formData).subscribe((res)=>{
      this.apiprojet.newdocs(doc).subscribe((res)=>{
        console.log(res)
        this.getdocs()
      })
    })
  }
  else{
    alert("le type de document n est pas pris en compte essai\navec le format PDF")
  }
 
}
getdocs(){
  this.apiprojet.getdocs(this.projet.idprojet).subscribe((res)=>{
    this.docs=res.data;
    console.log(res.data)
  })
}

getdoc(id:number){
  for (let index = 0; index < this.docs.length; index++) {
    const element = this.docs[index];
    if(element.iddoc==id){
      this.doc=element
      break;
    }
    
  }
}

//tache  

gettache(){
 this.apitache.gettacheprojet(this.projet.idprojet).subscribe((res)=>{
  this.taches=res.data;
  console.log(res.data)
}) 
}
newtache(formdata:any){
  formdata.idprojet=this.projet.idprojet
  this.apitache.addtache(formdata).subscribe((res)=>{
    console.log(res.data)
  }) 
}
// staste
newchart(types:any,item:any,data:any):void{
  console.log(item)
  Chart.register(...registerables);
  
  const option={
      
  }
  const config: ChartConfiguration={
    type:types,
    data:data,
    options:option
  }
  
  const chartItem: ChartItem= item as ChartItem
  
  
   const chart = new Chart(chartItem,config)
 }


}

