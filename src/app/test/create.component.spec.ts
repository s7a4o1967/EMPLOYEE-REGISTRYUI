import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from '../create/create.component';
import { HomeComponent } from '../home/home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule, MatMenuModule, MatIconModule, MatDialogModule, MatSelectModule, MatAutocompleteModule, MatInputModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
// import { Component, Input } from '@angular/core';
// import { CreateService } from '../services/create.service';

describe('CreateComponent', () => {
//   let component: CreateComponent;
//   let fixture: ComponentFixture<CreateComponent>;
//   let serviceMock:any; 

//   @Component({
//     selector: 'app-ingredient-single',
//     template: '<div></div>',
//   })
//   class MockSingleIngredientComponent {
//   @Input() public ingredientIndex: number;
//   @Input() public ingredient: FormGroup;
//   }
//   const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async(() => {
        // serviceMock={
        //     addD:jest.fn().mockName('serviceMock.addD'),
        //     addI:jest.fn().mockName('serviceMock.addI'),
        // }

    TestBed.configureTestingModule({
      
      declarations: [ CreateComponent,HomeComponent,
        // MockSingleIngredientComponent
     ],
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
        BrowserAnimationsModule,    SimpleNotificationsModule.forRoot(),
      ],
    //   providers: 
    //   [ 
    //     { provide: FormBuilder, useValue: formBuilder },
    //     { provide: CreateService, useValue: serviceMock }
    //   ]
    })
    // .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(CreateComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
  const  fixture = TestBed.createComponent(CreateComponent);
  const  component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
