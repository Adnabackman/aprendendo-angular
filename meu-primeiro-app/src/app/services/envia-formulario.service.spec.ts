import { TestBed } from '@angular/core/testing';

import { EnviaFormuladrioService } from './envia-formulario.service';

describe('EnviaFormuladrioService', () => {
  let service: EnviaFormuladrioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviaFormuladrioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
