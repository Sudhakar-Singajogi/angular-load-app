import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentFeederComponent } from './recent-feeder.component';

describe('RecentFeederComponent', () => {
  let component: RecentFeederComponent;
  let fixture: ComponentFixture<RecentFeederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentFeederComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentFeederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
