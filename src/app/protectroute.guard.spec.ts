import { TestBed, async, inject } from '@angular/core/testing';

import { ProtectrouteGuard } from './protectroute.guard';

describe('ProtectrouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProtectrouteGuard]
    });
  });

  it('should ...', inject([ProtectrouteGuard], (guard: ProtectrouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
