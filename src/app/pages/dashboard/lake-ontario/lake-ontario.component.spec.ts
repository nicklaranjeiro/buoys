import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeOntarioComponent } from './lake-ontario.component';

describe('LakeOntarioComponent', () => {
  let component: LakeOntarioComponent;
  let fixture: ComponentFixture<LakeOntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakeOntarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LakeOntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
