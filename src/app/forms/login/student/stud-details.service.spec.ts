import { TestBed } from '@angular/core/testing';

import { StudDetailsService } from './stud-details.service';

describe('StudDetailsService', () => {
  let service: StudDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
