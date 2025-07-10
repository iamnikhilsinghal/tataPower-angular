import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Products } from './components/products/products';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { DataBinding } from './components/data-binding/data-binding';
import { Directive } from './components/directive/directive';
import { Users } from './components/users/users';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'aboutUs', component: AboutUs },
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
  },
  { path: '**', component: PageNotFound },
];
