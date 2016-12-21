import { RouterModule } from "@angular/router";
// import { MessagesComponent } from "./messages/messages.component";
// import { AuthenticationComponent } from "./auth/authentication.component";
const APP_ROUTES = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
];
export const routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map