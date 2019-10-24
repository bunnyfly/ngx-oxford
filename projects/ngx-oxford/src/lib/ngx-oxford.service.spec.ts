import { TestBed } from '@angular/core/testing';

import { NgxOxfordService } from './ngx-oxford.service';

describe('NgxOxfordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxOxfordService = TestBed.get(NgxOxfordService);
    expect(service).toBeTruthy();
  });
});
