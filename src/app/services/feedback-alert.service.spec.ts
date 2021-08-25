import { TestBed } from '@angular/core/testing';

import { FeedbackAlertService } from './feedback-alert.service';

describe('FeedbackAlertService', () => {
  let service: FeedbackAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
