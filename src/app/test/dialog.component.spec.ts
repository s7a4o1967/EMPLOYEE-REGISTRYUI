import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogRef } from '@angular/material';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      providers:[
        {
          provide: MatDialogRef,
         
        }
      ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
