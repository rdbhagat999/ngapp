import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, takeUntil } from 'rxjs';
import { ActivationEnd, Router } from '@angular/router';
import { HttpCancelService } from '../services/http-cancel-service.service';

@Injectable()
export class ManageHttpInterceptor implements HttpInterceptor {
  constructor(router: Router, private httpCancelService: HttpCancelService) {
    router.events.subscribe((event) => {
      // An event triggered at the end of the activation part of the Resolve phase of routing.
      if (event instanceof ActivationEnd) {
        // Cancel pending calls
        this.httpCancelService.cancelPendingRequests();
      }
    });
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(takeUntil(this.httpCancelService.onCancelPendingRequests()));
  }
}
