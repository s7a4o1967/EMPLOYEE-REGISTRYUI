import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { Home1Component } from './home1/home1.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from './guards/auth.guard';

export const AUTH_PROVIDERS = [AuthGuard];
const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',  
    component:HomeComponent,
   // canActivate:[AuthGuard]
  },
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'view',
    component:ViewComponent
  },
  {
    path:'home1',
    component:Home1Component,
    //canActivate:[AuthGuard]
  },
  {
    path:'details',
    component:DetailsComponent
  },
  {
    path:'edit',
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
