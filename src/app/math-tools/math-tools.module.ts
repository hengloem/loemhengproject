import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathToolsRoutingModule } from './math-tools-routing.module';
import { BasicCalculatorComponent } from './basic-calculator/basic-calculator.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { ToolHomeComponent } from './tool-home/tool-home.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    ToolHomeComponent,
    BasicCalculatorComponent,
    LoanCalculatorComponent,
  ],
  imports: [
    CommonModule,
    MathToolsRoutingModule,
    SharedModule
  ]
})
export class MathToolsModule { }
