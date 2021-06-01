import { TestBed } from '@angular/core/testing';

import { ShortInterceptor } from './short.interceptor';

describe('ShortInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ShortInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ShortInterceptor = TestBed.inject(ShortInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
