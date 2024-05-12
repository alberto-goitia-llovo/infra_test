import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigInitService {
  private config: any;

  constructor(private httpClient: HttpClient) {}

  public getConfig(): Observable<any> {
    // TODO: type config
    return this.httpClient.get(environment.configFile).pipe(
      mergeMap((config) => {
        if (config) {
          this.config = config;
          return of(this.config);
        } else {
          return of(null);
        }
      }),
      catchError((error) => {
        console.log(error);
        return of(null);
      }),
    );
  }
}
