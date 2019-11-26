import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from '../edit/edit.component';
import { HomeComponent } from '../home/home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { NO_ERRORS_SCHEMA, DebugElement, Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule, MatMenuModule, MatIconModule, MatDialogModule, MatSelectModule, MatAutocompleteModule, MatInputModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { element, By } from 'protractor';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent ,HomeComponent],
      // schemas:[CUSTOM_ELEMENTS_SCHEMA]
      imports:[
        RouterTestingModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        HttpModule,FormsModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatAutocompleteModule,MatInputModule,
        BrowserAnimationsModule, 
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
  //
  //  fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
  // it('details',()=>{
  //     var firstname=component.details.lastName;
  //     expect(firstname).toEqual('Dean');
  // })

  // it('api call',()=>{
  //   console.log(component.details);
  // })
    // it('should get local storage username',()=>{
    //   expect(localStorage.setItem('userName','admin')).toEqual('admin');
    //   expect(localStorage.getItem('userName')).toEqual('admin');
    
    // })

    // it('should call createForm() ',()=>{
    //     expect(component.createForm()).toBeTruthy;
    // });

  
});


interface Applications {
  empId: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: string;
  createdBy: string;
  timeStamp: string;
}

  