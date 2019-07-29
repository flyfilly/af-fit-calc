import { Gender } from '@/store/modules/profile.module.ts';

export const agemap: AgeRange[] = [
  { low: 0, high: 29 },
  { low: 30, high: 39 },
  { low: 40, high: 49 },
  { low: 50, high: 59 },
  { low: 60, high: 999 },
];

const state: State = {
  scoresheet: null,
  assessment: {
    waistScore: {},
    pushupScore: {},
    situpScore: {},
    runScore: {},
  },
  assessments: [],
};

const getters = {
  getScoresheet(state: State): Scoresheet | null {
    return state.scoresheet;
  },

  getWaistScore(state: State): ComponentResult | true {
    return state.assessment.waistScore;
  },
};

const mutations = {
  setScoresheet(state: State, scoresheet: Scoresheet) {
    state.scoresheet = scoresheet;
  },

  setWaisteScore(state: State, waistScore: ComponentResult) {
    state.assessment.waistScore = waistScore;
  },
};

const actions = {
  async loadScoresheet({ commit }: any, { gender, age }: any) {
    console.log(gender);
    const url: string = `https://playground-81531.firebaseio.com/${
      Gender[gender]
    }/${agemap.findIndex(i => i.low <= age && i.high >= age)}.json`;

    const response = await fetch(url);
    const json = await response.json();
    json.waists = json.waists.filter((el: any) => el !== null);
    commit('setScoresheet', json);
  },

  updateWaistScore({ commit, state }: any, measurement: number | true) {
    const result = state.scoresheet.waists.find(
      (set: any) => set.waistlow <= measurement && set.waisthigh >= measurement,
    );
    result.value = measurement;
    commit('setWaisteScore', result);
  },
};

export const assessment = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export interface Assessment {
  date: string;
  waistScore: ComponentResult | true;
  runScore: ComponentResult | true;
  pushupScore: ComponentResult | true;
  situpScore: ComponentResult | true;
  result: Result;
}

export interface Scoresheet {
  agehigh: number;
  agelow: number;
  gender: string;
  pushups: Strength[];
  situps: Strength[];
  waists: Appearance[];
  runs: Cardio[];
}

export interface Cardio {
  minslow: number;
  minshigh: number;
  secshigh: number;
  secslow: number;
  totalhigh: number;
  totallow: number;
  risklevel: RiskLevel;
  pass: boolean;
  points: number;
}

export interface Appearance {
  waisthigh: number;
  waistlow: number;
  risklevel: RiskLevel;
  passed: boolean;
  points: number;
}

export interface Strength {
  high: number;
  low: number;
  passed: boolean;
  points: number;
}

export enum RiskLevel {
  low,
  moderate,
  high,
}

export enum Result {
  passed,
  failed,
}

interface AgeRange {
  low: number;
  high: number;
}

export interface ComponentResult {
  points: number;
  passed: boolean;
  risklevel: string;
  value: any;
}

interface State {
  scoresheet: Scoresheet | null;
  assessment: Assessment | null;
  assessments: Assessment[];
}
