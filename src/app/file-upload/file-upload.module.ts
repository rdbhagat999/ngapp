import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { FileDndComponent } from '../file-upload/file-dnd/file-dnd.component';
import { ProgressComponent } from '../file-upload/progress/progress.component';

const routes: Route[] = [
  {
    path: '',
    component: FileDndComponent,
  },
];

@NgModule({
  declarations: [FileDndComponent, ProgressComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [FileDndComponent],
})
export class FileUploadModule {}
