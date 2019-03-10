import { Routes } from '@angular/router';
import { GROUPS_PAGE_ROUTES } from './pages/groups-page/groups-page.routes';
import { HOME_PAGE_ROUTES } from './pages/home-page/home-page.routes';
import { PROFILE_PAGE_ROUTES } from './pages/profile-page/profile-page.routes';
import { PROJECTS_PAGE_ROUTES } from './pages/projects-page/projects-page.routes';
import { USERS_PAGE_ROUTES } from './pages/users-page/users-page.routes';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './pages/home-page/home-page.module#HomePageModule',
        data: HOME_PAGE_ROUTES[0].data
    },
    {
        path: 'users',
        loadChildren: './pages/users-page/users-page.module#UsersPageModule',
        data: USERS_PAGE_ROUTES[0].data
    },
    {
        path: 'groups',
        loadChildren: './pages/groups-page/groups-page.module#GroupsPageModule',
        data: GROUPS_PAGE_ROUTES[0].data
    },
    {
        path: 'projects',
        loadChildren: './pages/projects-page/projects-page.module#ProjectsPageModule',
        data: PROJECTS_PAGE_ROUTES[0].data
    },
    {
        path: 'profile',
        loadChildren: './pages/profile-page/profile-page.module#ProfilePageModule',
        data: PROFILE_PAGE_ROUTES[0].data
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
