const state: ProfileInterface = {
  name: null,
  age: 0,
  gender: null,
};

const getters = {
  hasProfile(state: ProfileInterface): boolean {
    return !!(state.name && state.gender && state.age > 1);
  },

  getAge(state:ProfileInterface): number {
    return state.age;
  },

  getName(state:ProfileInterface) : string {
    return state.name || '';
  },

  getGender(state:ProfileInterface) : Gender | null {
    return state.gender;
  }
};

const mutations = {
  setName(state: ProfileInterface, name: string) {
    state.name = name;
  },

  setAge(state: ProfileInterface, age: number) {
    state.age = age;
  },

  setGender(state: ProfileInterface, gender: Gender) {
    state.gender = gender;
  },
};

const actions = {
  save({ commit }, { name, age, gender }: ProfileInterface) {
    console.log("Im in the save finally!!!!");
    commit('setName', name);
    commit('setAge', age);
    commit('setGender', gender);
  },
};

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
