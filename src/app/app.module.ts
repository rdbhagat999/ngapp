import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DndDirective } from './directives/dnd.directive';
import { InputFocusDirective } from './directives/input-focus.directive';
import { LazyImgDirective } from './directives/lazy-img.directive';
import { RecaptchaDirective } from './directives/recaptcha.directive';
import { AuthGuard } from './guards/auth.guard';
import { ManageHttpInterceptor } from './interceptors/manage-http-interceptor.interceptor';
import { HttpCancelService } from './services/http-cancel-service.service';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    DndDirective,
    InputFocusDirective,
    LazyImgDirective,
    RecaptchaDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    HttpCancelService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ManageHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
