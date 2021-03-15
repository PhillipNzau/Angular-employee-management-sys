import { TestBed } from '@angular/core/testing';

import { DataScrapService } from './data-scrap.service';

describe('DataScrapService', () => {
  let service: DataScrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataScrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
