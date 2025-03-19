import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevToolsHomeComponent } from './dev-tools-home.component';

describe('DevToolsHomeComponent', () => {
  let component: DevToolsHomeComponent;
  let fixture: ComponentFixture<DevToolsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevToolsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevToolsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
