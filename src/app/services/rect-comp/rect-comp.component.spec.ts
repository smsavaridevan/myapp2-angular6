import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectCompComponent } from './rect-comp.component';

describe('RectCompComponent', () => {
  let component: RectCompComponent;
  let fixture: ComponentFixture<RectCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
