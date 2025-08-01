import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevToolsRoutingModule } from './dev-tools-routing.module';
import { DevToolsHomeComponent } from './dev-tools-home/dev-tools-home.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';
import { ImageMetadataEditorComponent } from './image-metadata-editor/image-metadata-editor.component';
import { SharedModule } from '@app/shared/shared.module';
import { PramPramChatComponent } from './pram-pram-chat/pram-pram-chat.component';


@NgModule({
  declarations: [
    DevToolsHomeComponent,
    HtmlEditorComponent,
    ImageMetadataEditorComponent,
    PramPramChatComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DevToolsRoutingModule
  ]
})
export class DevToolsModule { }
