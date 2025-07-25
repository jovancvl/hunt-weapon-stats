import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/weapons/weapons').then(m => m.Weapons)
    },
    {
        path: ':id',
        loadComponent: () => import('./pages/weapon-show/weapon-show').then(m => m.WeaponShow)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
