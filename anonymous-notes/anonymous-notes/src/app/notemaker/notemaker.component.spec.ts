import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotemakerComponent } from './notemaker.component';

describe('NotemakerComponent', () => {
  let component: NotemakerComponent;
  let fixture: ComponentFixture<NotemakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotemakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotemakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
