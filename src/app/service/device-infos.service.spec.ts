import { TestBed } from '@angular/core/testing';

import { DeviceInfosService } from './device-infos.service';

describe('DeviceInfosService', () => {
  let service: DeviceInfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceInfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
