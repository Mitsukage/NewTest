import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.sass']
})
export class PresentationComponent implements OnInit {

  currentPay = 7000000; // How much invested
  payLimit = 15000000;  // How much need to invest
  payBlockWidth = 0;    // visual size of block which show how much was invested

  constructor() {
  }

  ngOnInit() {
    // Show how much was invested
    this.payBlockWidth = 100 / (this.payLimit / this.currentPay);
  }

}
