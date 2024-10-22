import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolHomeComponent } from './tool-home.component';

describe('ToolHomeComponent', () => {
  let component: ToolHomeComponent;
  let fixture: ComponentFixture<ToolHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
