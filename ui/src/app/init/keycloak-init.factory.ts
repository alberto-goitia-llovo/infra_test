import { KeycloakService } from 'keycloak-angular';
import { Observable, from } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ConfigInitService } from './config-init.service';

export function initializeKeycloak(
  keycloak: KeycloakService,
  configService: ConfigInitService,
): () => Observable<boolean> {
  return () =>
    configService.getConfig().pipe(
      switchMap((config) =>
        from(
          keycloak.init({
            config: {
              url: config['KEYCLOAK_URL'],
              realm: config['KEYCLOAK_REALM'],
              clientId: config['KEYCLOAK_CLIENT_ID'],
            },
            initOptions: {
              onLoad: 'login-required',
              silentCheckSsoRedirectUri:
                window.location.origin + '/assets/silent-check-sso.html',
            },
          }),
        ),
      ),
      catchError((error) => {
        // TODO: add a proper use message that pops up to the user
        console.log('There was an error initializing Keycloak: ', error);
        throw error;
      }),
    );
}
