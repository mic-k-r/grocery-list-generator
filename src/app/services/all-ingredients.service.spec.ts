import { TestBed } from '@angular/core/testing';

import { AllIngredientsService } from './all-ingredients.service';

describe('AllIngredientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllIngredientsService = TestBed.get(AllIngredientsService);
    expect(service).toBeTruthy();
  });
});
