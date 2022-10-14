import { TestBed } from '@angular/core/testing';

import { FuncAgendaService } from './func-agenda.service';

describe('FuncAgendaService', () => {
  let service: FuncAgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncAgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
