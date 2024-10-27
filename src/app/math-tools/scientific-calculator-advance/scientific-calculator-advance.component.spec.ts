import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificCalculatorAdvanceComponent } from './scientific-calculator-advance.component';

describe('ScientificCalculatorAdvanceComponent', () => {
  let component: ScientificCalculatorAdvanceComponent;
  let fixture: ComponentFixture<ScientificCalculatorAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientificCalculatorAdvanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientificCalculatorAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
