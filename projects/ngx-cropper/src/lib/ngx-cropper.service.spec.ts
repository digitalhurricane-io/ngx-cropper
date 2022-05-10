import { TestBed } from '@angular/core/testing';

import { NgxCropperService } from './ngx-cropper.service';

describe('NgxCropperService', () => {
  let service: NgxCropperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCropperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
