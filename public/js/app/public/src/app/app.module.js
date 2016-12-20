import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent, DialogContent } from './app.component';
import { AuthService } from "./auth/auth.service";
import { AuthComponent } from './auth/auth.component';
import { ErrorComponent } from './error/error.component';
import { ErrorService } from './error/error.service';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent,
                        AuthComponent,
                        // HeaderComponent,
                        ErrorComponent,
                        AppComponent,
                        DialogContent
                    ],
                    imports: [
                        BrowserModule,
                        FormsModule,
                        MaterialModule.forRoot(),
                        HttpModule
                    ],
                    providers: [AuthService, ErrorService],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map