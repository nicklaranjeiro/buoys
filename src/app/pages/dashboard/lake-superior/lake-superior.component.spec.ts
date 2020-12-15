import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeSuperiorComponent } from './lake-superior.component';

describe('LakeSuperiorComponent', () => {
  let component: LakeSuperiorComponent;
  let fixture: ComponentFixture<LakeSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakeSuperiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LakeSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
