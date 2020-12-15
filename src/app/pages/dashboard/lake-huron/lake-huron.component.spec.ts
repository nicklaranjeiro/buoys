import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeHuronComponent } from './lake-huron.component';

describe('LakeHuronComponent', () => {
  let component: LakeHuronComponent;
  let fixture: ComponentFixture<LakeHuronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakeHuronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LakeHuronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
