import happenReducer, { $$initialState as $$happenState } from './happenReducer';
import railsContextReducer, { initialState as railsContextState } from './railsContextReducer';

export default {
  $$happenStore: happenReducer,
  railsContext: railsContextReducer,
};

export const initialStates = {
  $$happenState,
  railsContextState,
};
