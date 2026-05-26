import { Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './features/auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './features/auth/pages/register-page/register-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login',    component: LoginPageComponent },
  { path: 'auth/register', component: RegisterPageComponent },
  { path: 'dashboard',     component: DashboardPageComponent },
  { path: '**', redirectTo: 'auth/login' }
];