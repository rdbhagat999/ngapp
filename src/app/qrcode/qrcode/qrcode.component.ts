import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {
  title = 'angular-qr-code-tutorial';

  public qrdata: string;
  public qrCodeDownloadLink: SafeUrl = '';
  public level: 'L' | 'M' | 'Q' | 'H';
  public width: number;

  constructor() {
    this.level = 'M';
    this.qrdata = 'Ramandeep Bhagat';
    this.width = 64;
  }

  ngOnInit(): void {}

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  changeLevel(newValue: 'L' | 'M' | 'Q' | 'H'): void {
    this.level = newValue;
  }

  changeQrdata(newValue: string): void {
    this.qrdata = newValue;
  }

  changeWidth(newValue: number): void {
    this.width = newValue;
  }
}
