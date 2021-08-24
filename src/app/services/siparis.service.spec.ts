import { TestBed } from '@angular/core/testing';

import { SiparisService } from './siparis.service';

describe('SiparisService', () => {
  let service: SiparisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiparisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
