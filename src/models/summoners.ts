import { Effect, Reducer } from 'umi';

export interface SummonersModelState {
  name: string;
}

export interface SummonersModelType {
  namespace: 'summoners';
  state: SummonersModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<SummonersModelState>;
  };
}

const SummonersModel: SummonersModelType = {
  namespace: 'summoners',

  state: {
    name: 'summoners',
  },

  effects: {
    *query({ payload }, { call, put }) {
      yield;
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default SummonersModel;
