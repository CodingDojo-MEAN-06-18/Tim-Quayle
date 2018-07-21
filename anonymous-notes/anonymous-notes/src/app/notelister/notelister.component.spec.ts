import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotelisterComponent } from './notelister.component';

describe('NotelisterComponent', () => {
  let component: NotelisterComponent;
  let fixture: ComponentFixture<NotelisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotelisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotelisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
