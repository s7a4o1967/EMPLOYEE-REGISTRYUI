import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1Component } from '../home1/home1.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule, MatMenuModule, MatIconModule, MatDialogModule, MatSelectModule, MatAutocompleteModule, MatInputModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { HomeComponent } from '../home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Home1Component', () => {
  let component: Home1Component;
  let fixture: ComponentFixture<Home1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home1Component,HomeComponent ],
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
    fixture = TestBed.createComponent(Home1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
