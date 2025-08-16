
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    // { path: 'admission', loadComponent: () => import('./pages/admission/admission').then(m => m.AdmissionComponent) },
    // { path: 'courses', loadComponent: () => import('./pages/courses/courses').then(m => m.CoursesComponent) },
    // { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent) },
    { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery').then(m => m.Gallery) },
    { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
    {
        path: 'facilities',
        children: [
            { path: '', loadComponent: () => import('./pages/facilities/facilities').then(m => m.Facilities) },
            { path: 'ncc', loadComponent: () => import('./pages/facilities/ncc/ncc').then(m => m.Ncc) }
        ]
    },
    { path: '**', redirectTo: '' }
];
