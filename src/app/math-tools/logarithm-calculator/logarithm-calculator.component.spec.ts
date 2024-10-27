import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogarithmCalculatorComponent } from './logarithm-calculator.component';

describe('LogarithmCalculatorComponent', () => {
  let component: LogarithmCalculatorComponent;
  let fixture: ComponentFixture<LogarithmCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogarithmCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogarithmCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
