import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerManageStatusComponentComponent } from './player-manage-status-component.component';

describe('PlayerManageStatusComponentComponent', () => {
  let component: PlayerManageStatusComponentComponent;
  let fixture: ComponentFixture<PlayerManageStatusComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerManageStatusComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerManageStatusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
