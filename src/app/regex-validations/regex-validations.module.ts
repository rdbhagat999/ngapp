import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegexValidationsComponent } from './regex-validations/regex-validations.component';
import { AddressComponent } from './address/address.component';
import { CreditCardDirective } from './credit-card.directive';

const routes: Route[] = [
  {
    path: '',
    component: RegexValidationsComponent,
  },
];

@NgModule({
  declarations: [RegexValidationsComponent, AddressComponent, CreditCardDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class RegexValidationsModule {}
