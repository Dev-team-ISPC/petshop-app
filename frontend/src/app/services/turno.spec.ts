import { TestBed } from '@angular/core/testing';

import { Turno } from './turno';

describe('Turno', () => {
  let service: Turno;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Turno);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
