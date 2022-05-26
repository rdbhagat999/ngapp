import { TestBed } from '@angular/core/testing';

import { ManageHttpInterceptorInterceptor } from './manage-http-interceptor.interceptor';

describe('ManageHttpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ManageHttpInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ManageHttpInterceptorInterceptor = TestBed.inject(ManageHttpInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
