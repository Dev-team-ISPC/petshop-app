import { TestBed } from '@angular/core/testing';

import { Vacunacion } from './vacunacion';

describe('Vacunacion', () => {
  let service: Vacunacion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vacunacion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
