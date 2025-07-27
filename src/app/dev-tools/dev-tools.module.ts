import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevToolsRoutingModule } from './dev-tools-routing.module';
import { DevToolsHomeComponent } from './dev-tools-home/dev-tools-home.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';
import { ImageMetadataEditorComponent } from './image-metadata-editor/image-metadata-editor.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    DevToolsHomeComponent,
    HtmlEditorComponent,
    ImageMetadataEditorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DevToolsRoutingModule
  ]
})
export class DevToolsModule { }
