import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicCalculatorComponent } from './basic-calculator/basic-calculator.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { ToolHomeComponent } from './tool-home/tool-home.component';
import { NoAuthGuard } from '@app/core/guard/no-auth.guard'; // Ensure this path is correct
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ToolHomeComponent,

    // children: [
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     component: ToolHomeComponent
    //   },
    //   {
    //     path: 'home',
    //     component: ToolHomeComponent
    //   },
    //   {
    //     path: 'basic-calculator',
    //     component: BasicCalculatorComponent
    //   },
    //   {
    //     path: 'loan-calculator',
    //     component: LoanCalculatorComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MathToolsRoutingModule { }
