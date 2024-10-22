import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolHomeComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ToolHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
