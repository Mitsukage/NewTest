import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app-store.module';
import {Observable} from 'rxjs';
import {ItemsState} from '../store/reducers/items.reducer';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.sass']
})
export class MainBarComponent implements OnInit {

  items: Observable<ItemsState>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.items = this.store.select('items');
  }

}
