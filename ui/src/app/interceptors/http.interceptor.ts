import {
  HttpErrorResponse,
  HttpEventType,
  type HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { LoggerService } from '../services/logger.service';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const logger = inject(LoggerService);
  return next(req).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        console.log(req.url, 'returned a response with status', event.status);
      }
    }),
    catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        logger.error(`HTTP ERROR: ${error.message}`);
      }
      throw error;
    }),
  );
};
