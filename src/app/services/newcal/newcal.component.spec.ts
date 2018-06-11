import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcalComponent } from './newcal.component';

describe('NewcalComponent', () => {
  let component: NewcalComponent;
  let fixture: ComponentFixture<NewcalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
