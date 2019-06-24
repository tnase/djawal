import { TestBed } from '@angular/core/testing';

import { SteedService } from './steed.service';

describe('SteedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SteedService = TestBed.get(SteedService);
    expect(service).toBeTruthy();
  });
});
