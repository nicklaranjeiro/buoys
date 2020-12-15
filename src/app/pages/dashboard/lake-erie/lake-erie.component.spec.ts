import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeErieComponent } from './lake-erie.component';

describe('LakeErieComponent', () => {
  let component: LakeErieComponent;
  let fixture: ComponentFixture<LakeErieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakeErieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LakeErieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
