import happenReducer, { $$initialState as $$commentsState } from './happenReducer';
import railsContextReducer, { initialState as railsContextState } from './railsContextReducer';

export default {
  $$commentsStore: happenReducer,
  railsContext: railsContextReducer,
};

export const initialStates = {
  $$commentsState,
  railsContextState,
};
