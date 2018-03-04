import { TestBed, inject } from '@angular/core/testing';

import { InviteServiceService } from './invite-service.service';

describe('InviteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InviteServiceService]
    });
  });

  it('should be created', inject([InviteServiceService], (service: InviteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
