import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Products } from './components/products/products';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { DataBinding } from './components/data-binding/data-binding';
import { Directive } from './components/directive/directive';
import { Users } from './components/users/users';
import { AuthGuard } from './guards/auth-guard';
import { System } from './components/system/system';
import { Profile } from './components/system/profile/profile';
import { Notification } from './components/system/notification/notification';
import { Login } from './components/login/login';
import { TemplateDriven } from './components/template-driven/template-driven';
import { UserDetail } from './components/user-detail/user-detail';
import { Reactive } from './components/reactive/reactive';
import { PaginatedTable } from './components/paginated-table/paginated-table';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'login',
    component: Login,
  },
  { path: 'aboutUs', component: AboutUs },
  {
    path: 'lazy',
    loadComponent: () => import('./components/lazy/lazy').then((m) => m.Lazy),
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'data-binding',
    component: DataBinding,
  },
  {
    path: 'directive',
    component: Directive,
  },
  {
    path: 'users',
    component: Users,
    canActivate: [AuthGuard],
    canMatch: [AuthGuard],
  },
  {
    path: 'users/:id',
    component: UserDetail,
  },
  {
    path: 'system',
    component: System,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'profile',
        component: Profile,
      },
      {
        path: 'notification',
        component: Notification,
      },
    ],
  },
  {
    path: 'template-driven',
    component: TemplateDriven,
    canDeactivate: [AuthGuard],
  },
  {
    path: 'reactive',
    component: Reactive,
  },
  {
    path: 'paginated-table',
    component: PaginatedTable,
  },
  { path: '**', component: PageNotFound },
];
