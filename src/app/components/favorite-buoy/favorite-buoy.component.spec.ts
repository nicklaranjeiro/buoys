import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBuoyComponent } from './favorite-buoy.component';

describe('FavoriteBuoyComponent', () => {
  let component: FavoriteBuoyComponent;
  let fixture: ComponentFixture<FavoriteBuoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteBuoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBuoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
