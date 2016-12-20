import { Component, Optional } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
export var AppComponent = (function () {
    function AppComponent(_dialog, _snackbar) {
        var _this = this;
        this._dialog = _dialog;
        this._snackbar = _snackbar;
        this.isDarkTheme = false;
        this.foods = [
            { name: 'Pizza', rating: 'Excellent' },
            { name: 'Burritos', rating: 'Great' },
            { name: 'French fries', rating: 'Pretty good' },
        ];
        this.progress = 0;
        // Update the value for the progress-bar on an interval.
        setInterval(function () {
            _this.progress = (_this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this._dialog.open(DialogContent);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.lastDialogResult = result;
        });
    };
    AppComponent.prototype.showSnackbar = function () {
        this._snackbar.open('YUM SNACKS', 'CHEW');
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'material2-app-app',
                    templateUrl: 'app.component.html',
                    styleUrls: ['app.component.css'],
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [
        { type: MdDialog, },
        { type: MdSnackBar, },
    ];
    return AppComponent;
}());
export var DialogContent = (function () {
    function DialogContent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogContent.decorators = [
        { type: Component, args: [{
                    template: "\n    <p>This is a dialog</p>\n    <p>\n      <label>\n        This is a text box inside of a dialog.\n        <input #dialogInput>\n      </label>\n    </p>\n    <p> <button md-button (click)=\"dialogRef.close(dialogInput.value)\">CLOSE</button> </p>\n  ",
                },] },
    ];
    /** @nocollapse */
    DialogContent.ctorParameters = [
        { type: MdDialogRef, decorators: [{ type: Optional },] },
    ];
    return DialogContent;
}());
//# sourceMappingURL=app.component.js.map