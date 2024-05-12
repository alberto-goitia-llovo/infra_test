import { type Routes } from '@angular/router';
import { ROUTE_LOGIN, ROUTE_MAIN } from './constants/route.constants';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: ROUTE_LOGIN, pathMatch: 'full' },
  { path: ROUTE_LOGIN, component: LoginComponent },
  { path: ROUTE_MAIN, component: MainComponent, canActivate: [AuthGuard] },
];
