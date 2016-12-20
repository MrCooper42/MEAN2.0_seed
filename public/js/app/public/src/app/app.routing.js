import { RouterModule } from "@angular/router";
// import { MessagesComponent } from "./messages/messages.component";
// import { AuthenticationComponent } from "./auth/authentication.component";
var APP_ROUTES = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map