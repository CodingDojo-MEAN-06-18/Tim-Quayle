import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleresultsComponent } from './battleresults.component';

describe('BattleresultsComponent', () => {
  let component: BattleresultsComponent;
  let fixture: ComponentFixture<BattleresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
