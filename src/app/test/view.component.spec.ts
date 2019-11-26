import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponent } from '../view/view.component';
import { HomeComponent } from '../home/home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule, MatFormFieldModule, MatMenuModule, MatIconModule, MatSelectModule, MatAutocompleteModule, MatInputModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { EditComponent } from '../edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('ViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
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
      providers: [HomeComponent, HomeComponent],
      declarations: [
        ViewComponent, HomeComponent,EditComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(ViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  // it('should get details', () => {
  //   const fixture = TestBed.createComponent(EditComponent);
  //   const app = fixture.componentInstance;
  //   const fixture1 = TestBed.createComponent(ViewComponent);
  //   const app1 = fixture1.debugElement.componentInstance;
  //   console.log(app1.view);
  //   console.log(app.details);
  //   expect(app1.view).toEqual(app.details)
  // })
 
});
