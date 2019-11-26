import { TestBed } from '@angular/core/testing';

import { DetailsService } from '../services/details.service';

describe('DetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsService = TestBed.get(DetailsService);
    expect(service).toBeTruthy();
  });
});
