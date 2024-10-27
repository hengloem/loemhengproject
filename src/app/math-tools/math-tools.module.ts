import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathToolsRoutingModule } from './math-tools-routing.module';
import { BasicCalculatorComponent } from './basic-calculator/basic-calculator.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { ToolHomeComponent } from './tool-home/tool-home.component';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@app/layout/layout.module';
import { LogarithmCalculatorComponent } from './logarithm-calculator/logarithm-calculator.component';
import { ScientificCalculatorComponent } from './scientific-calculator/scientific-calculator.component';
import { ScientificCalculatorAdvanceComponent } from './scientific-calculator-advance/scientific-calculator-advance.component';

@NgModule({
  declarations: [
    ToolHomeComponent,
    BasicCalculatorComponent,
    LoanCalculatorComponent,
    LogarithmCalculatorComponent,
    ScientificCalculatorComponent,
    ScientificCalculatorAdvanceComponent,
  ],
  imports: [
    CommonModule,
    MathToolsRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class MathToolsModule { }
