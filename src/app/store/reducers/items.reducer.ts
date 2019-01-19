import {Item} from '../../models/item';
import {ActionItems, ItemsActionTypes} from '../actions/items.actions';

export interface ItemsState {
  items: Item[];
  selected: number;
}

export const initialState: ItemsState = {
  items: [
    {
      title: 'Residence de la colline',
      subtitle: 'Lausanne, Vaud',
      url: '../../assets/item-1.png',
      fullInvest: 'CHF 1`000`000',
      purchaseCost: 'CHF 25`000`000',
      minIvest: 'CHF 100`000',
      type: 'Co-Ownership',
      mortage: '55%',
      period: '7 years',
      expReturn: '4.88%',
      maturity: '',
      rate: '',
      payBlockWidth: '80',
      isCompleted: ''
    }, {
      title: 'Calla Rossa Complex',
      subtitle: 'Carouge, Geneva',
      url: '../../assets/item-2.png',
      fullInvest: 'CHF 10`000`000',
      purchaseCost: 'CHF 22`000`000',
      minIvest: 'CHF 500`000',
      type: 'Co-Investment',
      mortage: '60%',
      period: '7 years',
      expReturn: '5.20%',
      maturity: '',
      rate: '',
      payBlockWidth: '0',
      isCompleted: ''
    }, {
      title: 'Hauts de vesenaz',
      subtitle: 'Vesenaz, Geneve',
      url: '../../assets/item-3.png',
      fullInvest: 'COMPLETED',
      purchaseCost: 'CHF 8`000`000',
      minIvest: 'CHF 250`000',
      type: 'Mezzanine Debt',
      mortage: '85%',
      period: '',
      expReturn: '',
      maturity: '7 years',
      rate: '6.50%',
      payBlockWidth: '100',
      isCompleted: ''
    }
  ],
  selected: 0
};

export function  itemReducer (state = initialState,
                            action: ActionItems) {
  switch (action.type) {
    case ItemsActionTypes.UPDATE_ALL_ITEMS:
      return {...state, items: action.payload.items, selected: action.payload.selected};
    case ItemsActionTypes.ADD_ITEM:
      return {...state, items: [...state.items, action.payload]};
    case ItemsActionTypes.REMOVE_ITEM: {
      state.items.splice(action.payload, 1);
      return state;
    }
    case ItemsActionTypes.SELECT_ITEM:
      return {...state, selected: action.payload};
    default:
      return state;
  }
}
