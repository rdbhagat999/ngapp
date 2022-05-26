import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebWorkerComponent } from './web-worker/web-worker.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: WebWorkerComponent,
  },
];

@NgModule({
  declarations: [WebWorkerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class WorkerDemoModule {}
