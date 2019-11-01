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
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxPaginationModule } from 'ngx-pagination';
import {  MatTableModule, MatSelectModule, MatIconModule, MatButtonModule,MatDialogModule, MatMenuModule } from '@angular/material';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { DialogComponent } from './dialog/dialog.component';
// import { MatAutocompleteModule,MatInputModule} from '@angular/material';
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
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgxPaginationModule,
    MatTableModule,  
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    SimpleNotificationsModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
