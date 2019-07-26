const state: ProfileInterface = {
  name: null,
  age: 0,
  gender: null,
};

const getters = {
  hasProfile(state: ProfileInterface): boolean {
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

export interface ProfileInterface {
  name: string | null;
  age: number | 0;
  gender: Gender | null;
}

export enum Gender {
  male,
  female,
}
