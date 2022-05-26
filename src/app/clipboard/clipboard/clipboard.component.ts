import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss'],
})
export class ClipboardComponent implements OnInit {
  couponText = 'SUPER DISCOUNT 50%';
  isCopied = false;

  constructor() {}

  ngOnInit(): void {}

  copied(event: { isSuccess: boolean }) {
    this.isCopied = event.isSuccess;
  }
}
