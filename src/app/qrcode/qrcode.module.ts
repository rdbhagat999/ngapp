import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { Route, RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: QrcodeComponent,
  },
];

@NgModule({
  declarations: [QrcodeComponent],
  imports: [
    CommonModule,
    FormsModule,
    QRCodeModule,
    RouterModule.forChild(routes),
  ],
})
export class QrcodeModule {}
