import {Dispatch} from "react";

interface IActivePage {
    active: number;
}

type TAction = 
    | {type: 'CHANGE_PAGE', payload: number};

export interface IPages {
    PageState: IActivePage;
    PageDispatch: Dispatch<TAction>;
}

export const ActivePage:IActivePage = {
    active: 1
}

export const PagesReducer = (state:IActivePage, action:TAction):IActivePage => {
    switch(action.type){
        case 'CHANGE_PAGE': return {...state, active: action.payload};
        default: return state
    }
}
