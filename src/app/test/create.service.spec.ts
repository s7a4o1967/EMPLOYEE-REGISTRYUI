import { TestBed } from '@angular/core/testing';

import { CreateService } from '../services/create.service';

describe('CreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers:[
          CreateService
      ]
  }));

  it('should be created', () => {
    const service: CreateService = TestBed.get(CreateService);
    expect(service).toBeTruthy();
  });
});
