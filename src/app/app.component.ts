import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'collapsed',
        style({
          // display: 'none',
          opacity: 1,
          height: '0px',
        })
      ),
      state(
        'expanded',
        style({
          opacity: 1,
          // display: 'flex',
        })
      ),
      transition('collapsed => expanded', [animate('200ms ease-in')]),
      transition('expanded => collapsed', [animate('200ms ease-in')]),
    ]),
  ],
})
export class AppComponent {
  title = 'ngapp';
  name = 'Angular ' + VERSION.full;
  isCollapsed = true;
  token: string | undefined;

  constructor() {
    this.isCollapsed = true;
  }

  onRecaptchaSuccess(token: string) {
    this.token = token;
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
