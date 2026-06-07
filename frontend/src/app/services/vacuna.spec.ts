import { TestBed } from '@angular/core/testing';

import { Vacuna } from './vacuna';

describe('Vacuna', () => {
  let service: Vacuna;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vacuna);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
