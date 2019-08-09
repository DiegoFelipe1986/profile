import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CodeComponent } from './components/code/code.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoadingComponent } from './components/loading/loading.component';

const APP_ROUTES: Routes = [
    { path: 'loading', component: LoadingComponent },
    { path: 'main', component: MainComponent },
    { path: 'code', component: CodeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'loading' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
