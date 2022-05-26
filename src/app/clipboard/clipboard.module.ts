import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { Route, RouterModule } from '@angular/router';
import { ClipboardModule as NgxClipboardModule } from 'ngx-clipboard';

const routes: Route[] = [
  {
    path: '',
    component: ClipboardComponent,
  },
];

@NgModule({
  declarations: [ClipboardComponent],
  imports: [CommonModule, NgxClipboardModule, RouterModule.forChild(routes)],
})
export class ClipboardModule {}
