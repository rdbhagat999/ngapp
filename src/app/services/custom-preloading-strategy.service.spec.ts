import { TestBed } from '@angular/core/testing';

import { CustomPreloadingStrategy } from './custom-preloading-strategy.service';

describe('CustomPreloadingStrategy', () => {
  let service: CustomPreloadingStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreloadingStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
