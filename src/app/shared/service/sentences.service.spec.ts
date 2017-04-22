import { TestBed, inject } from '@angular/core/testing';

import { SentencesService } from './sentences.service';

describe('SentencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SentencesService]
    });
  });

  it('should ...', inject([SentencesService], (service: SentencesService) => {
    expect(service).toBeTruthy();
  }));
});
