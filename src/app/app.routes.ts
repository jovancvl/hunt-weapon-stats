import { Routes } from '@angular/router';
import { WeaponSelectPage } from './pages/weapon-select-page/weapon-select-page';
import { WeaponStatsPage } from './pages/weapon-stats-page/weapon-stats-page';
import { WeaponComparisonPage } from './pages/weapon-comparison-page/weapon-comparison-page'

export const routes: Routes = [
  {
    path: '',
    component: WeaponSelectPage
  },
  {
    path: 'test',
    loadComponent: () => import('./pages/test-page/test-page').then(m => m.TestPage)
  },
  {
    path: 'compare',
    component: WeaponComparisonPage
  },
  {
    path: ':id',
    component: WeaponStatsPage
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
