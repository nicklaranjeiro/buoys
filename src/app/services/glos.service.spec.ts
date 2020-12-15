import { TestBed } from '@angular/core/testing';

import { GlosService } from './glos.service';

describe('GlosService', () => {
  let service: GlosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
