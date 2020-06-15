import { Effect, Reducer } from 'umi';

export interface HeroesModelState {
  name: string;
}

export interface HeroesModelType {
  namespace: 'heroes';
  state: HeroesModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<HeroesModelState>;
  };
}

const HeroesModel: HeroesModelType = {
  namespace: 'heroes',

  state: {
    name: 'heroes',
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

export default HeroesModel;
