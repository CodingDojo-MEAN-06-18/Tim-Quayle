import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotecalcComponent } from './votecalc.component';

describe('VotecalcComponent', () => {
  let component: VotecalcComponent;
  let fixture: ComponentFixture<VotecalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotecalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotecalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
