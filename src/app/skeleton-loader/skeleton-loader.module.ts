import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';

const routes: Route[] = [
  {
    path: '',
    component: SkeletonLoaderComponent,
  },
];

@NgModule({
  declarations: [SkeletonLoaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    RouterModule.forChild(routes),
  ],
})
export class SkeletonLoaderModule {}
