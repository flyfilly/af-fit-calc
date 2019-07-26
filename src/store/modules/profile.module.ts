const state: State = {
  name: null,
  age: 0,
  gender: null,
};

const getters = {
  hasProfile(state: State): boolean {
    return !!(state.name && state.gender && state.age > 1);
  },
};

const mutations = {};

const actions = {};

export const profile = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

interface State {
  name: string | null;
  age: number;
  gender: Gender | null;
}

export enum Gender {
  male,
  female,
}
