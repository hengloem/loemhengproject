import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevToolsRoutingModule } from './dev-tools-routing.module';
import { DevToolsHomeComponent } from './dev-tools-home/dev-tools-home.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';


@NgModule({
  declarations: [
    DevToolsHomeComponent,
    HtmlEditorComponent
  ],
  imports: [
    CommonModule,
    DevToolsRoutingModule
  ]
})
export class DevToolsModule { }
