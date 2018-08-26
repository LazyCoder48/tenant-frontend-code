/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataBusService } from './data-bus.service';

describe('Service: DataBus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBusService]
    });
  });

  it('should ...', inject([DataBusService], (service: DataBusService) => {
    expect(service).toBeTruthy();
  }));
});
