import createReducer from '../utils/createReducer';

const Model = {
  namespace: 'counterTest',
  state: {
    num: 0
  },

  reducers: {
    updateState: (state, { payload }) => {
      return {
        ...state,
        ...payload
      };
    },
    add: state => {
      return {
        ...state,
        num: state.num + 1
      };
    },
    minus: state => {
      return {
        ...state,
        num: state.num - 1
      };
    }
  }
};

export default createReducer(Model.state, Model.reducers, Model.namespace);
