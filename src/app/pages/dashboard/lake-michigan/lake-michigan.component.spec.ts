import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeMichiganComponent } from './lake-michigan.component';

describe('LakeMichiganComponent', () => {
  let component: LakeMichiganComponent;
  let fixture: ComponentFixture<LakeMichiganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakeMichiganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LakeMichiganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
