import {Action} from '@ngrx/store';
import {Item} from '../../models/item';
import {ItemsState} from '../reducers/items.reducer';

export enum ItemsActionTypes {
  UPDATE_ALL_ITEMS = '[Item] Update all items',
  ADD_ITEM = '[Item] Add item',
  SELECT_ITEM = '[Item] Select item',
  REMOVE_ITEM = '[Item] Remove item'
}

export class UpdateAllItems implements Action {
  readonly type = ItemsActionTypes.UPDATE_ALL_ITEMS;
  constructor(public payload: ItemsState) {}
}

export class SelectItem implements Action {
  readonly type = ItemsActionTypes.SELECT_ITEM;
  constructor(public payload: number) {}
}

export class AddItem implements Action {
  readonly type = ItemsActionTypes.ADD_ITEM;
  constructor(public payload: Item) {}
}

export class RemoveItem implements Action {
  readonly type = ItemsActionTypes.REMOVE_ITEM;
  constructor(public payload: number) {}
}

export type ActionItems = UpdateAllItems | SelectItem | AddItem | RemoveItem;
