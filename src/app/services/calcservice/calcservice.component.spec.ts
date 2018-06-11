import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcserviceComponent } from './calcservice.component';

describe('CalcserviceComponent', () => {
  let component: CalcserviceComponent;
  let fixture: ComponentFixture<CalcserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
