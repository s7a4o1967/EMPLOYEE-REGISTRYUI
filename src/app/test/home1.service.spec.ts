import { TestBed } from '@angular/core/testing';

import { Home1Service } from '../services/home1.service';

describe('Home1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers:[Home1Service]
  }));

  it('should be created', () => {
    const service: Home1Service = TestBed.get(Home1Service);
    expect(service).toBeTruthy();
  });
});
