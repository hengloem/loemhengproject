import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMetadataEditorComponent } from './image-metadata-editor.component';

describe('ImageMetadataEditorComponent', () => {
  let component: ImageMetadataEditorComponent;
  let fixture: ComponentFixture<ImageMetadataEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageMetadataEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageMetadataEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
