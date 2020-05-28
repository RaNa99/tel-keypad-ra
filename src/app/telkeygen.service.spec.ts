import { TestBed } from '@angular/core/testing';

import { TelkeygenService } from './telkeygen.service';

describe('TelkeygenService', () => {
  let service: TelkeygenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelkeygenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
