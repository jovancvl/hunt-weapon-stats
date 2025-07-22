import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/home/home').then(m => m.Home)
            },
            {
                path: 'search',
                loadComponent: () => import('./pages/search/search').then(m => m.Search)
            },
            {
                path: 'hunters',
                loadComponent: () => import('./pages/hunters/hunters').then(m => m.Hunters)
            },
            {
                path: 'weapons',
                loadComponent: () => import('./pages/weapons/weapons').then(m => m.Weapons)
            },
            {
                path: 'weapons/:id',
                loadComponent: () => import('./pages/weapon-show/weapon-show').then(m => m.WeaponShow)
            },
            {
                path: 'tools',
                loadComponent: () => import('./pages/tools/tools').then(m => m.Tools)
            },
            {
                path: 'consumables',
                loadComponent: () => import('./pages/consumables/consumables').then(m => m.Consumables)
            },
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
