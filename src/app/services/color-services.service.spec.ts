import { TestBed } from '@angular/core/testing';

import { ColorServicesService } from './color-services.service';

describe('ColorServicesService', () => {
  let service: ColorServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
