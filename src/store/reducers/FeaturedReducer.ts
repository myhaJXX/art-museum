import { Dispatch } from 'react';
import { TZod } from '../../models/zod';
import { addToLocal } from '../../utils/addToLocal';
import { removeFromLocale } from '../../utils/removeFromLocale';

interface IFeatuerd {
  list: TZod[];
}

type TAction =
  | { type: 'ADD_FEATURED'; payload: TZod }
  | { type: 'REMOVE_FEATURED'; payload: number }
  | { type: 'ADD_FEATURED_LOCAL'; payload: TZod[] };

export interface IActiveFeatured {
  FeaturedState: IFeatuerd;
  FeaturedDispatch: Dispatch<TAction>;
}

export const AFeatured: IFeatuerd = { list: [] };

export const FeaturedReducer = (
  state: IFeatuerd,
  action: TAction
): IFeatuerd => {
  switch (action.type) {
    case 'ADD_FEATURED':
      addToLocal(action.payload)
      return { ...state, list: [...state['list'], action.payload] };
    case 'REMOVE_FEATURED':
      removeFromLocale(action.payload)
      return {
        ...state,
        list: state['list'].filter(e => e.id != action.payload),
      };
    
      case 'ADD_FEATURED_LOCAL':
        let eles = localStorage.getItem('featured')
        let localNow:TZod[] = eles ? JSON.parse(eles) : []
        return {
          ...state,
          list: [...localNow]
        };
    default:
      return state;
  }
};
