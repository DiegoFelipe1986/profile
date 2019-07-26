import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CodeComponent } from './components/code/code.component';
import { ProfileComponent } from './components/profile/profile.component';

const APP_ROUTES: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'code', component: CodeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'main' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
