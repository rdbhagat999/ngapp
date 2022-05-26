import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/webworker' },
  {
    path: 'webworker',
    loadChildren: () =>
      import('./worker-demo/worker-demo.module').then(
        (m) => m.WorkerDemoModule
      ),
    data: { preload: true, delay: true, time: 5000 },
  },
  {
    path: 'clipboard',
    loadChildren: () =>
      import('./clipboard/clipboard.module').then((m) => m.ClipboardModule),
    data: { preload: true, delay: true, time: 5000 },
  },
  {
    path: 'qrcode',
    loadChildren: () =>
      import('./qrcode/qrcode.module').then((m) => m.QrcodeModule),
    data: { preload: true, delay: true, time: 5000 },
  },
  {
    path: 'regex',
    loadChildren: () =>
      import('./regex-validations/regex-validations.module').then(
        (m) => m.RegexValidationsModule
      ),
    data: { preload: true, delay: true, time: 5000 },
  },
  {
    path: 'skeleton',
    loadChildren: () =>
      import('./skeleton-loader/skeleton-loader.module').then(
        (m) => m.SkeletonLoaderModule
      ),
    data: { preload: true, delay: true, time: 5000 },
  },
  {
    path: 'upload',
    loadChildren: () =>
      import('./file-upload/file-upload.module').then(
        (m) => m.FileUploadModule
      ),
    data: { preload: true, delay: true, time: 5000 },
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then((m) => m.MapModule),
    data: { preload: true, delay: true, time: 5000 },
  },
  { path: '**', redirectTo: '/webworker' },
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
      // relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule, QuicklinkModule],
})
export class AppRoutingModule {}
