import { TestBed } from '@angular/core/testing';

import { EditService } from '../services/edit.service';

describe('EditService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers:[EditService]
  }));

  it('should be created', () => {
    const service: EditService = TestBed.get(EditService);
    expect(service).toBeTruthy();
  });
});
