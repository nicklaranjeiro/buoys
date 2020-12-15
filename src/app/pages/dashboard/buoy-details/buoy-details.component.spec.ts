import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuoyDetailsComponent } from './buoy-details.component';

describe('BuoyDetailsComponent', () => {
  let component: BuoyDetailsComponent;
  let fixture: ComponentFixture<BuoyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuoyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuoyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
