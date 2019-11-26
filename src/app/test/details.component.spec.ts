// import { TestBed, async } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { DetailsComponent } from '../details/details.component';

// describe('DetailsComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         DetailsComponent
//       ],
//     }).compileComponents();
//   }));
//   // it('should create the details comp', () => {
//   //   const fixture = TestBed.createComponent(DetailsComponent);
//   //   const detailsComp = fixture.debugElement.componentInstance;
//   //   expect(detailsComp).toBeTruthy();
//   // });  
//   // it(`should have as title 'frontend'`, () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   const app = fixture.debugElement.componentInstance;
//   //   expect(app.title).toEqual('frontend');
//   // });
// });





import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from '../details/details.component';
import { HomeComponent } from '../home/home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule, MatMenuModule, MatIconModule, MatDialogModule, MatSelectModule, MatAutocompleteModule, MatInputModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailsService } from '../services/details.service';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let dishServiceMock: any;

  const formBuilder: FormBuilder = new FormBuilder();
  
  beforeEach(async(() => {
    dishServiceMock = {
      addDish: jest.fn().mockName('dishServiceMock.addDish'),
      addIngredient: jest.fn().mockName('dishServiceMock.addIngredient')
    };
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent,HomeComponent],
      // providers: 
      // [ 
      //   { provide: FormBuilder, useValue: formBuilder },
      //   { provide: dishServiceMock, useValue: dishServiceMock }
      // ],
      providers:[
          DetailsService
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
        BrowserAnimationsModule, 
        NgxPaginationModule,
  
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // console.log(component.testdata);
  });
});
