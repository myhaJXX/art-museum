import { FC, PropsWithChildren, useReducer } from 'react';
import Store from './store';
import ThemeColors from './reducers/ColorsReducer';
import { PagesReducer, ActivePage } from './reducers/PagesReducer';
import { FeaturedReducer, AFeatured } from './reducers/FeaturedReducer';

const ContextProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [PageState, PageDispatch] = useReducer(PagesReducer, ActivePage);
  const [FeaturedState, FeaturedDispatch] = useReducer(
    FeaturedReducer,
    AFeatured
  );
  return (
    <Store.Provider
      value={{
        ...ThemeColors,
        PageState,
        PageDispatch,
        FeaturedState,
        FeaturedDispatch,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default ContextProvider;
