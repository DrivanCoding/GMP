import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';


import { MatButton, MatButtonModule } from '@angular/material/button';
import { _MatTabGroupBase,MatTab,MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card'
import {  MatFormFieldModule } from '@angular/material/form-field'
import {  MatInputModule } from '@angular/material/input'
import {  MatGridListModule } from '@angular/material/grid-list'
import {  MatExpansionModule } from '@angular/material/expansion'
import {  MatSelectModule } from '@angular/material/select'
import {  MatBadgeModule } from '@angular/material/badge'
import {  MatTableModule } from '@angular/material/table'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { ProjetComponent } from './projet/projet.component';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './dialog/dialog.component';
import { ParamsComponent } from './params/params.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { ClientComponent } from './client/client.component';
import { TacheComponent } from './tache/tache.component';
import { DahbordComponent } from './dahbord/dahbord.component';

const appRoutes: Routes =[
  {path:'Projet', component: ProjetComponent},
  {path:'User', component: UserComponent},
  {path:'Setting', component: ParamsComponent},
  {path:'Chat', component: ChatComponent},
  {path:'Client', component: ClientComponent},
  {path:'Tache', component: TacheComponent},
  {path:'Dashbord', component: DahbordComponent},
  {path:'', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProjetComponent,
    HomeComponent,
    DialogComponent,
    ParamsComponent,
    LoginComponent,
    ChatComponent,
    ClientComponent,
    TacheComponent,
    DahbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule,
    MatSelectModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule { }
