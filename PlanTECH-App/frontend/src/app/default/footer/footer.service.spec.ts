import { TestBed, inject } from '@angular/core/testing';

import { FooterService } from './footer.service';

describe('FooterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooterService]
    });
  });

  it('should ...', inject([FooterService], (service: FooterService) => {
    expect(service).toBeTruthy();
  }));
});
