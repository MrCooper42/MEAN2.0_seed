import { Component, Optional } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
export class AppComponent {
    constructor(_dialog, _snackbar) {
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
        setInterval(() => {
            this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }
    openDialog() {
        let dialogRef = this._dialog.open(DialogContent);
        dialogRef.afterClosed().subscribe(result => {
            this.lastDialogResult = result;
        });
    }
    showSnackbar() {
        this._snackbar.open('YUM SNACKS', 'CHEW');
    }
}
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'root-app',
                templateUrl: 'app.component.html',
                styleUrls: ['app.component.css'],
            },] },
];
/** @nocollapse */
AppComponent.ctorParameters = [
    { type: MdDialog, },
    { type: MdSnackBar, },
];
export class DialogContent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
}
DialogContent.decorators = [
    { type: Component, args: [{
                template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
  `,
            },] },
];
/** @nocollapse */
DialogContent.ctorParameters = [
    { type: MdDialogRef, decorators: [{ type: Optional },] },
];
//# sourceMappingURL=app.component.js.map