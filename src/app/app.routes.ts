import { Routes } from '@angular/router';
import { TestPage } from './pages/test-page/test-page';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/weapon-select-page/weapon-select-page').then(m => m.WeaponSelectPage)
  },
  {
    path: 'test',
    component: TestPage
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/weapon-stats-page/weapon-stats-page').then(m => m.WeaponStatsPage)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
