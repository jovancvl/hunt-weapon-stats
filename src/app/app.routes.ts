import { Routes } from '@angular/router';
import { WeaponSelectPage } from './pages/weapon-select-page/weapon-select-page';
import { TestComponent } from './pages/test/test.component';

export const routes: Routes = [
  {
    path: '',
    component: WeaponSelectPage
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
    path: 'test',
    component: TestComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
