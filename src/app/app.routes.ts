import { Routes } from '@angular/router';
import { WeaponSelectPage } from './pages/weapon-select-page/weapon-select-page';

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
    loadComponent: () => import("./pages/weapon-comparison-page/weapon-comparison-page").then(m => m.WeaponComparisonPage)
  },
  {
    path: 'weapons/:id',
    loadComponent: () => import("./pages/weapon-stats-page/weapon-stats-page").then(m => m.WeaponStatsPage)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
