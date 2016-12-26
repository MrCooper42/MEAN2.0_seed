import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { GamesComponent } from './games/games.component';
import { AuthenticationComponent } from './auth/authentication.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/news', pathMatch: 'full' },
    { path: 'news', component: NewsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'games', component: GamesComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: "./auth/auth.module#AuthModule" }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
