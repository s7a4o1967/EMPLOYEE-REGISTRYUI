import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from '../home/home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule, MatMenuModule, MatIconModule, MatDialogModule } from '@angular/material';
import { HttpModule } from '@angular/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[
        RouterTestingModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        HttpModule
      ],
  
  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
