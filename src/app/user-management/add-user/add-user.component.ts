import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  template: `
  <iframe src="https://dashboard.hypertrack.com/widget/actions;lookup_id=tracker0001?key=pk_test_a54fc32e7d3325e61bdde2be60f627c4ac7a977f" width="700" height="700">
  </iframe>
  `,
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // <ht-users-map-container [showSidebar]="true" [hasPlaceline]="true" [sidebarWidth]="370"></ht-users-map-container>
    // <iframe src="https://dashboard.hypertrack.com/widget/map/users?key=pk_test_a54fc32e7d3325e61bdde2be60f627c4ac7a977f" width="700" height="700">
    // </iframe>
  }

}

// https://dashboard.hypertrack.com/widget/actions;lookup_id=tracker0001?key=pk_test_ba14c812-4cc1-43ef-b50d-fbb4f09e0b51