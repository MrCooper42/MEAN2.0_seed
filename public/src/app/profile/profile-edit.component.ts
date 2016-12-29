import { Component, OnInit } from '@angular/core';

const TOKEN = localStorage.getItem('token');

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
