import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appInputFocus]',
})
export class InputFocusDirective implements OnInit, AfterViewInit {
  constructor(private el: ElementRef) {
    if (!el.nativeElement['focus']) {
      console.log('Element does not accept focus.');
    }
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 200);
  }
}
