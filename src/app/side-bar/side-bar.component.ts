import {Component} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent {

  currentMenuItemColor = null; // menu item which is active now

  constructor() {
  }

  // Checker menu item
  onChanged(el) {
    if (this.currentMenuItemColor) {
      this.currentMenuItemColor.style.color = '#9eabbc';
    }
    el.path[0].style.color = '#f2833b';
    this.currentMenuItemColor = el.path[0];
  }
}
