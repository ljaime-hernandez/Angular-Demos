import { TestBed } from '@angular/core/testing';

import { ShortUrlService } from './short-url.service';

describe('ShortUrlService', () => {
  let service: ShortUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
