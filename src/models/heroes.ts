import { Effect, Reducer, Subscription, request } from 'umi';

interface HeroProps {
  ename: number;
  cname: string;
  title: string;
  new_type: number;
  hero_type: number;
  skin_name: string;
}

export interface HeroesModelState {
  heroes: HeroProps[];
  freeHeroes: HeroProps[];
}

export interface HeroesModelType {
  namespace: 'heroes';
  state: HeroesModelState;
  effects: {
    fetch: Effect;
  };
  reducers: {
    save: Reducer<HeroesModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const HeroesModel: HeroesModelType = {
  namespace: 'heroes',

  state: {
    heroes: [],
    freeHeroes: [],
  },

  effects: {
    *fetch({ type, payload }, { put, call, select }) {
      const heroes = yield request('/web201605/js/herolist.json');
      const freeHeroes = yield request('/freeheros.json', {
        method: 'post',
        data: {
          number: 10,
        },
      });
      yield put({
        type: 'save',
        payload: {
          heroes: heroes || [],
          freeHeroes: freeHeroes || [],
        },
      });
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

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/heroes') {
          dispatch({
            type: 'fetch',
          });
        }
      });
    },
  },
};

export default HeroesModel;
