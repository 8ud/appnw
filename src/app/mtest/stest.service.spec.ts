import { TestBed } from '@angular/core/testing';

import { StestService } from './stest.service';

describe('StestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StestService = TestBed.get(StestService);
    expect(service).toBeTruthy();
  });
});
