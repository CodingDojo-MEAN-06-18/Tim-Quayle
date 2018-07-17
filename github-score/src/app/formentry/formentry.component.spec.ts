import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormentryComponent } from './formentry.component';

describe('FormentryComponent', () => {
  let component: FormentryComponent;
  let fixture: ComponentFixture<FormentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
