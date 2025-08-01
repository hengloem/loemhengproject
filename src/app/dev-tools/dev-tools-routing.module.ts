import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevToolsHomeComponent } from './dev-tools-home/dev-tools-home.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';
import { ImageMetadataEditorComponent } from './image-metadata-editor/image-metadata-editor.component';
import { PramPramChatComponent } from './pram-pram-chat/pram-pram-chat.component';


const routes: Routes = [
  {
    path: '',
    component: DevToolsHomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DevToolsHomeComponent
      },
      {
        path: '',
        component: DevToolsHomeComponent
      },
      {
        path: 'html-editor',
        component: HtmlEditorComponent
      },
      {
        path: 'image-metadata-editor',
        component: ImageMetadataEditorComponent
      },
      {
        path: 'pram-pram-chat',
        component: PramPramChatComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevToolsRoutingModule { }
