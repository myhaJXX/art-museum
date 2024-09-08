import { Dispatch } from 'react';
import { TZod } from '../../models/zod';

interface IFeatuerd {
  list: TZod[];
}

type TAction =
  | { type: 'ADD_FEATURED'; payload: TZod }
  | { type: 'REMOVE_FEATURED'; payload: number };

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
      return { ...state, list: [...state['list'], action.payload] };
    case 'REMOVE_FEATURED':
      return {
        ...state,
        list: state['list'].filter(e => e.id != action.payload),
      };
    default:
      return state;
  }
};
