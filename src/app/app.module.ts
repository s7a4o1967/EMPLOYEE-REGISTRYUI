import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { Routes,RouterModule, RoutesRecognized } from '@angular/router';
import { HttpModule } from '@angular/http';
const appRoutes: Routes = [ 
  { path: 'login', component: LoginComponent }, 
  { path: 'home', component: HomeComponent },
  {path:'create',component:CreateComponent},
  {path:'view',component:ViewComponent},
  {path:'home1',component:Home1Component},
  {path:'details',component:DetailsComponent},
  {path:'edit',component:EditComponent},
  
  // { path: '**', component: PageNotFoundComponent } 
]; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home1Component,
    LoginComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent,
    ViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
