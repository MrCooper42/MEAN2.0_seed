import { Component } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  isIn = false; // store state
  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  isNavbarCollapsed = false;

}
