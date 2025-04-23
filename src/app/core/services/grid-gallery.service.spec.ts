import { TestBed } from '@angular/core/testing';

import { GridGalleryService } from './grid-gallery.service';

describe('GridGalleryService', () => {
  let service: GridGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
