import { TestBed } from '@angular/core/testing';

import { PageTicketService } from './page-ticket.service';

describe('PageTicketService', () => {
  let service: PageTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
