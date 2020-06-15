import { Effect, Reducer } from 'umi';

export interface ItemsModelState {
  name: string;
}

export interface ItemsModelType {
  namespace: 'items';
  state: ItemsModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<ItemsModelState>;
  };
}

const ItemsModel: ItemsModelType = {
  namespace: 'items',

  state: {
    name: 'items',
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

export default ItemsModel;
