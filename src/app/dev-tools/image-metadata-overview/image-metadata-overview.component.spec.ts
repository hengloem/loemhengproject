import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMetadataOverviewComponent } from './image-metadata-overview.component';

describe('ImageMetadataOverviewComponent', () => {
  let component: ImageMetadataOverviewComponent;
  let fixture: ComponentFixture<ImageMetadataOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageMetadataOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageMetadataOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
