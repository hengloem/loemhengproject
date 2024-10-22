import { CalculatorComponent } from "./calculator/calculator.component";
import { LoanCalculatorComponent } from "./loan-calculator/loan-calculator.component";
import { ToolHomeComponent } from "./tool-home/tool-home.component";

export const COMPONENTS = [
    ToolHomeComponent,
    CalculatorComponent,
    LoanCalculatorComponent
]

export * from "./tool-home/tool-home.component";
export * from "./calculator/calculator.component";
export * from "./loan-calculator/loan-calculator.component";
