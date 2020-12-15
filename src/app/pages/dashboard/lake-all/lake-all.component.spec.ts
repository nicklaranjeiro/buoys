import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeAllComponent } from './lake-all.component';

describe('LakeAllComponent', () => {
  let component: LakeAllComponent;
  let fixture: ComponentFixture<LakeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakeAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LakeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
