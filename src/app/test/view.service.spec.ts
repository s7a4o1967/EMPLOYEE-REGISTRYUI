import { TestBed } from '@angular/core/testing';

import { ViewService } from '../services/view.service';

describe('ViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers:[ViewService]
  }));

  it('should be created', () => {
    const service: ViewService = TestBed.get(ViewService);
    expect(service).toBeTruthy();
  });
});
